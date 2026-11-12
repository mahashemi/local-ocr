"""Regression checks for the Term 03 Persian learning content and chapter mapping."""

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT / "website"


def read(name: str) -> str:
    return (WEB / name).read_text(encoding="utf-8")


def test_all_sixty_term03_source_chapters_have_lexicon_links() -> None:
    additions = read("term03-lexicon-additions.js")
    sources = [
        *(f"FA3-{i:02d}" for i in range(1, 21)),
        *(f"KH3-{i:02d}" for i in range(1, 21)),
        *(f"N3-{i:02d}" for i in range(1, 11)),
        *(f"SH3-{i:02d}" for i in range(1, 11)),
    ]
    assert len(sources) == 60
    assert all(f'"{source}"' in additions for source in sources)


def test_every_farsi_umumi_unit_has_core_vocabulary() -> None:
    data = read("term03-data.js")
    units = {int(unit) for unit in re.findall(r"\{unit:(\d+),source:", data)}
    assert units == set(range(1, 21))


def test_all_twenty_khulasa_sheets_exist_and_have_five_lines() -> None:
    khulasa = read("term03-khulasa.js")
    assert len(re.findall(r"\{ch:\s*\d+,title:", khulasa)) == 20
    line_arrays = re.findall(r"lines:\s*\[(.*?)\]", khulasa, flags=re.DOTALL)
    assert len(line_arrays) == 20
    assert all(5 <= len(re.findall(r'"(?:[^"\\]|\\.)*"', lines)) <= 6 for lines in line_arrays)


def test_all_twenty_chapters_have_writing_and_speech_prompts() -> None:
    writing = read("term03-writing.js")
    speech_start = writing.index("window.TERM3_SPEECHES")
    essay_section, speech_section = writing[:speech_start], writing[speech_start:]
    assert len(re.findall(r"\{ch:\s*\d+,title:", essay_section)) == 20
    assert len(re.findall(r"\{ch:\s*\d+,title:", speech_section)) == 20


def test_newestan_fourth_chapter_is_mapped_to_unit_two_consistently() -> None:
    data = read("term03-data.js")
    audit = read("term03-source-audit.js")
    assert 'N3-04 · social relationships' in data
    assert re.search(r'2:\{base:"FA3-02[^\\n]*N3-04', data)
    mappings = re.findall(r'(?:N|V|A)\((\d+),"N3-04"', audit)
    assert mappings and set(mappings) == {"2"}


def test_shared_vocabulary_is_available_in_every_linked_unit() -> None:
    index = read("index.html")
    for script in (
        "term03-lexicon-additions.js",
        "term03-matn-verbs.js",
        "term03-source-audit.js",
    ):
        source = read(script)
        assert "prior.units=Array.from(new Set" in source
        assert "x.units=[x.unit]" in source
    assert "units:Array.isArray(a.units)" in index
    assert "(i.units||[i.ch]).includes(Number(c))" in index
    assert "flatMap(i=>(i.units||[i.ch])" in index


def test_core_verb_masdar_and_imperative_are_not_identical() -> None:
    data = read("term03-data.js")
    forms = re.findall(r'ms:"([^"]*)",amr:"([^"]*)"', data)
    assert forms
    assert all(
        masdar == "—" or imperative == "—" or masdar.replace("‌", "") != imperative.replace("‌", "")
        for masdar, imperative in forms
    )
