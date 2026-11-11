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


if __name__ == "__main__":
    app()
