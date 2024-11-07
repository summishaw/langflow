from langflow.custom import Component
from langflow.io import (
    DictInput,
    IntInput,
    Output,
    SecretStrInput,
    StrInput,
)
from langflow.schema import Data


class FirecrawlScrapeApi(Component):
    display_name: str = "FirecrawlScrapeApi"
    description: str = "Firecrawl Scrape API."
    #name = "FirecrawlScrapeApi"
    output_types: list[str] = ["Document"]
    documentation: str = "https://docs.firecrawl.dev/api-reference/endpoint/scrape"

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
        DictInput(
            name="pageOptions",
            display_name="Page Options",
            info="The page options to send with the request.",
        ),
        DictInput(
            name="extractorOptions",
            display_name="Extractor Options",
            info="The extractor options to send with the request.",
        ),
    ]

    outputs = [
        Output(display_name="Data", name="data", method="crawl"),
    ]

    def crawl(self) -> list[Data]:
        try:
            from firecrawl.firecrawl import FirecrawlApp
        except ImportError as e:
            msg = "Could not import firecrawl integration package. Please install it with `pip install firecrawl-py`."
            raise ImportError(msg) from e

        extractor_options_dict = self.extractorOptions.__dict__["data"]["text"] if self.extractorOptions else {}
        page_options_dict = self.pageOptions.__dict__["data"]["text"] if self.pageOptions else {}

        app = FirecrawlApp(api_key=self.api_key)
        results = app.scrape_url(
            self.url,
            {
                "timeout": self.timeout,
                "extractorOptions": extractor_options_dict,
                "pageOptions": page_options_dict,
            },
        )
        return Data(data=results)
