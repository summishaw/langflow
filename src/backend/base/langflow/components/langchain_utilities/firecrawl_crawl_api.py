from langflow.custom import Component
from langflow.io import (
    DictInput,
    IntInput,
    Output,
    SecretStrInput,
    StrInput,
)
from langflow.schema import Data


class FirecrawlCrawlApi(Component):
    display_name: str = "FirecrawlCrawlApi"
    description: str = "Firecrawl Crawl API."
    name = "FirecrawlCrawlApi"

    output_types: list[str] = ["Document"]
    documentation: str = "https://docs.firecrawl.dev/api-reference/endpoint/crawl"

    inputs = [
        SecretStrInput(
            name="api_key",
            display_name="API Key",
            required=True,
            password=True,
            info="The API key to use Firecrawl API.",
        ),
        StrInput(
            name="url",
            display_name="URL",
            required=True,
            info="The URL to scrape.",
        ),
        IntInput(
            name="timeout",
            display_name="Timeout",
            info="Timeout in milliseconds for the request.",
        ),
        StrInput(
            name="idempotency_key",
            display_name="Idempotency Key",
            info="Optional idempotency key to ensure unique requests.",
        ),
        DictInput(
            name="crawlerOptions",
            display_name="Crawler Options",
            info="The crawler options to send with the request.",
        ),
        DictInput(
            name="pageOptions",
            display_name="Page Options",
            info="The page options to send with the request.",
        ),
    ]

    outputs = [
        Output(display_name="Data", name="data", method="crawl"),
    ]

    def crawl(self) -> Data:
        try:
            from firecrawl.firecrawl import FirecrawlApp
        except ImportError as e:
            msg = "Could not import firecrawl integration package. Please install it with `pip install firecrawl-py`."
            raise ImportError(msg) from e
        crawler_options_dict = self.crawlerOptions.__dict__["data"]["text"] if self.crawlerOptions else {}

        page_options_dict = self.pageOptions.__dict__["data"]["text"] if self.pageOptions else {}

        if not self.idempotency_key:
            self.idempotency_key = str(uuid.uuid4())

        app = FirecrawlApp(api_key=self.api_key)
        crawl_result = app.crawl_url(
            self.url,
            params={
            },
            idempotency_key=self.idempotency_key,
        )

        return Data(data={"results": crawl_result})
