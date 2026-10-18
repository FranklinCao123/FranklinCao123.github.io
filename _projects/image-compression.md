---
title: "Post-Training Quantization and Fixed-Point Analysis for Learned Image Compression"
short_title: "Neural Codec Precision"
date: 2026-04-01
period: "Apr. 2026 – Jun. 2026"
order: 6
summary: "A reproducible framework for evaluating low-precision inference, post-training quantization, and fixed-point storage in neural image codecs."
tags:
  - Model Quantization
  - Image Compression
  - Edge AI
status: "Completed"
repository: "https://github.com/FranklinCao123/neural-codec-precision"
---

## Overview

Conducted at China Telecom Shanghai Research Institute, this project studies how reduced-precision computation affects learned image compression models intended for edge deployment. It provides a configuration-driven framework for measuring the trade-offs among compression quality, runtime, memory consumption, model size, numerical stability, and module sensitivity.

## Experimental Scope

- Evaluated pretrained CompressAI codecs, including **BMShj2018-Hyperprior**, **Cheng2020-Anchor**, and **Cheng2020-Attention**, on the Kodak image dataset.
- Compared FP32, FP16, BF16, INT8 weight-only PTQ, calibrated INT8 weight-and-activation PTQ, and INT8/10/12/16 fixed-point activation storage.
- Preserved entropy coding and probability-table operations in floating point where required, isolating the precision effects of neural modules while retaining valid end-to-end `compress()` and `decompress()` evaluation.

## Evaluation Framework

The pipeline measures rate–distortion performance (**bpp, PSNR, and MS-SSIM**), encoding and decoding latency, CUDA memory, model footprint, invalid reconstructions, and non-finite outputs. Module-level analyses compare the sensitivity of the encoder, decoder, hyperprior, GDN, residual, convolution, and attention components. An independent calibration set is used for calibrated INT8 experiments to avoid leakage from the Kodak evaluation set.

## Highlight

The experiments identify **INT12 fixed-point activation storage** as a practical precision point, providing a theoretical storage reduction of **62.5%** relative to FP32 while enabling detailed rate–distortion and module-sensitivity analysis. The repository also includes scripts for reproducible experiment execution, result aggregation, visualization, and paper-table generation.

## Resources

- **Code:** [neural-codec-precision](https://github.com/FranklinCao123/neural-codec-precision)
- **Report:** *Post-Training Quantization and Fixed-Point Analysis for Learned Image Compression*
