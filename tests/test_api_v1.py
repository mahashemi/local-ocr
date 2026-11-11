from fastapi.testclient import TestClient
from local_ocr.api.app import app

client = TestClient(app)

def test_health_is_local_and_offline() -> None:
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["mode"] == "local"
    assert body["network_access"] == "disabled"

def test_language_profiles_include_persian_and_future_languages() -> None:
    response = client.get("/api/v1/languages")
    assert response.status_code == 200
    profiles = {item["code"]: item for item in response.json()}
    assert profiles["fas"]["direction"] == "rtl"
    assert profiles["fas"]["status"] == "available"
    assert profiles["ara"]["status"] == "planned"
    assert profiles["urd"]["status"] == "planned"

def test_engine_discovery_does_not_claim_candidate_is_installed() -> None:
    response = client.get("/api/v1/engines")
    assert response.status_code == 200
    engines = {item["id"]: item for item in response.json()}
    assert engines["tesseract"]["installed"] is False
    assert engines["bina"]["status"] == "planned"

def test_root_and_openapi_are_available() -> None:
    assert client.get("/").status_code == 200
    schema = client.get("/openapi.json").json()
    assert "/api/v1/health" in schema["paths"]
