---
title: "Quantization and Inference Optimization for Learned Image Compression"
short_title: "Learned Image Compression"
date: 2026-04-01
period: "Apr. 2026 – Jun. 2026"
order: 2
summary: "A precision-analysis and quantization toolkit for the edge deployment of learned image compression models."
tags:
  - Model Quantization
  - Image Compression
  - Edge AI
status: "Completed"
repository: "https://github.com/FranklinCao123/neural-codec-precision"
---

## Overview

This project was conducted at China Telecom Shanghai Research Institute and focused on deploying learned image compression models on edge devices. The work investigated how reduced-precision numerical formats can lower memory and inference costs while preserving the functionality of complex compression architectures.

## Key Work

- Studied post-training quantization and fixed-point inference strategies across FP16, BF16, INT8, and INT12 numerical formats.
- Developed evaluation pipelines to systematically benchmark the effects of quantization on encoder, decoder, and attention modules.

## Highlight

INT12 fixed-point activations provide a theoretical storage reduction of **62.5%** compared with FP32 representations, demonstrating their potential for memory-efficient edge inference.

## Resources

- **Code:** [neural-codec-precision](https://github.com/FranklinCao123/neural-codec-precision)
