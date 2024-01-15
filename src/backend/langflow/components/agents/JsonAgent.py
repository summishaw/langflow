
from langflow import CustomComponent
from langchain.agents import AgentExecutor,create_json_agent
from langflow.field_typing import (
    BaseLanguageModel,
)
from langchain_community.agent_toolkits.base import BaseToolkit
class JsonAgentComponent(CustomComponent):
    display_name = "JsonAgent"
    description = "Construct a json agent from an LLM and tools."

    def build_config(self):
        return {
            "llm": {"display_name": "LLM"},
            "toolkit": {"display_name": "Toolkit"},
        }

    def build(
        self,
        llm: BaseLanguageModel,
        toolkit: BaseToolkit,
    ) -> AgentExecutor:
        return create_json_agent(llm=llm, toolkit=toolkit)