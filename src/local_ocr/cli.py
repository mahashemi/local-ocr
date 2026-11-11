"""Command-line entry point for Local OCR."""

from pathlib import Path

import typer

app = typer.Typer(
    name="local-ocr",
    help="Free, local-first OCR tools.",
    no_args_is_help=True,
)


@app.command()
def version() -> None:
    """Print the installed application version."""
    from local_ocr import __version__

    typer.echo(f"Local OCR {__version__}")


@app.command()
def init_data(
    directory: Path = typer.Option(
        Path("data"),
        "--directory",
        "-d",
        help="Local runtime data directory.",
    ),
) -> None:
    """Create the local folders used for inputs, work, outputs, and cache."""
    for name in ("input", "working", "output", "failed", "cache"):
        (directory / name).mkdir(parents=True, exist_ok=True)
    typer.echo(f"Created local data folders under: {directory.resolve()}")


@app.command()
def process(
    input_dir: Path = typer.Option(Path("data/input"), "--input", "-i", help="PDF input folder."),
    output_dir: Path = typer.Option(Path("data/output"), "--output", "-o", help="Text output folder."),
    working_dir: Path = typer.Option(
        Path("data/working"), "--working", help="Local page checkpoints."
    ),
    language: str = typer.Option("fas", "--language", "-l", help="Tesseract language code."),
    dpi: int = typer.Option(300, "--dpi", min=100, max=600, help="PDF render resolution."),
    workers: int = typer.Option(3, "--workers", "-w", min=1, max=16),
    pages_per_batch: int = typer.Option(5, "--pages-per-batch", min=1, max=100),
    no_resume: bool = typer.Option(False, "--no-resume", help="Reprocess completed pages."),
    non_recursive: bool = typer.Option(False, "--non-recursive", help="Do not scan subfolders."),
) -> None:
    """OCR all PDFs in a folder and write one UTF-8 text file per PDF."""
    import pytesseract

    from local_ocr.batch import process_directory

    try:
        installed_languages = pytesseract.get_languages(config="")
    except pytesseract.TesseractNotFoundError as exc:
        raise typer.BadParameter(
            "Tesseract executable was not found. Install Tesseract 5 first."
        ) from exc

    if language not in installed_languages:
        raise typer.BadParameter(
            f"Tesseract language '{language}' is not installed. "
            f"Installed languages: {', '.join(installed_languages)}. "
            "Install the required .traineddata file, then retry."
        )

    typer.echo(f"Scanning PDFs in: {input_dir.resolve()}")
    summary = process_directory(
        input_dir=input_dir,
        output_dir=output_dir,
        working_dir=working_dir,
        language=language,
        dpi=dpi,
        workers=workers,
        pages_per_batch=pages_per_batch,
        resume=not no_resume,
        recursive=not non_recursive,
    )
    typer.echo(
        f"Finished: {summary.documents} documents, "
        f"{summary.pages_completed}/{summary.pages_total} pages completed, "
        f"{summary.pages_failed} page failures."
    )
    for output in summary.outputs or []:
        typer.echo(f"  {output}")
    if summary.pages_failed:
        raise typer.Exit(code=1)
    if summary.documents == 0:
        typer.echo("No PDF files found.")


if __name__ == "__main__":
    app()
