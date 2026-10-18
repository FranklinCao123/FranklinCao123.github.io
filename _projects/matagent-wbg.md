---
title: "MatAgent-WBG: A Scientific Agent for Wide-Bandgap Materials Screening"
short_title: "MatAgent-WBG"
date: 2026-08-01
period: "Ongoing"
order: 5
summary: "A lightweight, auditable scientific agent for screening wide-bandgap semiconductor materials."
tags:
  - AI Agents
  - Materials Informatics
  - Scientific RAG
status: "Ongoing"
repository: "https://github.com/FranklinCao123/MatAgent-WBG"
---

## Overview

MatAgent-WBG is a lightweight, tool-using scientific agent for screening wide-bandgap semiconductor materials. It combines large-language-model reasoning with validated scientific tools, Materials Project data, literature retrieval, persistent workflow state, and citation-checked reporting. The system runs through hosted services and APIs without requiring a local model, GPU, or large training dataset.

## Workflow

1. **Parse requirements.** Natural-language requests are converted into strict Pydantic objects and checked before execution.
2. **Plan and execute tools.** LangGraph routes allow-listed tool calls, queries Materials Project, and applies deterministic scientific filters and ranking.
3. **Retrieve evidence.** Semantic Scholar abstracts are embedded with hosted BGE-M3 and retrieved through a Supabase pgvector knowledge base.
4. **Generate a grounded report.** Candidate materials and DOI citations are validated before the final report is produced.

## Design and Reliability

- Uses persistent LangGraph state, execution traces, and SQLite checkpoints to make multi-stage runs inspectable and reproducible.
- Separates responsibilities: the LLM handles language, tool selection, and communication, while scientific filtering and ranking remain deterministic code.
- Includes an offline fallback, a lightweight FastAPI interface, network-free tests, and retrieval evaluation metrics.
- Rejects unknown candidates, invalid tool arguments, unsupported API values, and unverified DOI references rather than silently fabricating evidence.

## Scientific Scope

The agent is designed as an auditable screening assistant rather than a replacement for materials validation. Missing properties such as thermal conductivity or breakdown field are reported explicitly and are not fabricated or used for silent ranking. Retrieved abstracts improve traceability but do not replace full-paper review, and device-level factors such as defects, doping, contacts, cost, and manufacturability remain outside the current screening stage.

## Resources

- **Code:** [MatAgent-WBG](https://github.com/FranklinCao123/MatAgent-WBG)
- **Interface:** Command-line workflow and a lightweight local FastAPI web interface.
- **Status:** Active development.
