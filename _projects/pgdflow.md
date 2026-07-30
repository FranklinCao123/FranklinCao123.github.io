---
title: "PGDFlow: From Backpropagation to Forward Generation via Flow Matching"
short_title: "PGDFlow"
date: 2026-01-01
period: "Jan. 2026 – Jul. 2026"
order: 1
summary: "A generative optimization framework based on Conditional Flow Matching."
tags:
  - Flow Matching
  - Generative Models
  - Optimization
status: "Manuscript in Preparation"
---

## Overview

PGDFlow is a generative optimization framework that replaces repeated gradient-based search at inference time with efficient forward generation. Instead of solving every new problem from scratch, it learns the conditional distribution of optimized solutions produced by an iterative optimizer. Once trained, PGDFlow transports samples from a simple Gaussian prior directly toward high-quality solutions in one or a few forward steps—without backpropagation during inference.

The framework is developed around adversarial example generation and further evaluated on black-box function optimization and a two-dimensional XY model, demonstrating its potential as a general approach to AI-driven scientific optimization.

## Motivation

Traditional optimizers such as Projected Gradient Descent (PGD) repeatedly compute gradients and update each input independently. This makes inference expensive, particularly when gradients are unavailable and must be estimated through many function evaluations. Repeated optimization is also required to obtain multiple valid solutions.

PGDFlow starts from a different perspective: stochastic optimization runs naturally produce a distribution of successful solutions. Learning this full conditional distribution is preferable to direct regression, which tends to collapse multimodal solutions to their average. A generative model can instead reuse knowledge across related problem instances and produce diverse candidates through forward sampling.

## Method

<figure class="project-figure">
  <img
    src="{{ '/assets/images/projects/pgdflow/pgdflow-overview.png' | relative_url }}"
    alt="Comparison between iterative PGD and the three-stage PGDFlow pipeline"
  >
  <figcaption>
    PGDFlow converts iterative optimization into conditional generation through solution construction, flow matching training, and backpropagation-free sampling.
  </figcaption>
</figure>

The PGDFlow pipeline contains three stages:

1. **Solution construction.** PGD is run offline with random restarts to collect multiple optimized solutions for each initial input.
2. **Conditional flow matching.** A conditional vector field learns to transport Gaussian noise to the solution distribution. The model supports standard multi-step flow matching and a MeanFlow variant for one-step generation.
3. **Forward generation.** At inference time, new solutions are generated through one or a few forward evaluations and projected onto the feasible region when required.

Three complementary strategies improve solution quality:

- **Optimization-guided fine-tuning** incorporates the task objective directly into model refinement.
- **Noise modulation** adapts the prior distribution to each input while keeping the learned flow fixed.
- **Multi-noise selection** generates several candidates and selects the one with the best objective value.

## Key Results

<figure class="project-figure">
  <img
    src="{{ '/assets/images/projects/pgdflow/pgdflow-results.png' | relative_url }}"
    alt="Effects of noise modulation and flow steps on the adversarial optimization objective"
  >
  <figcaption>
    Noise modulation shifts generated candidates toward stronger objective values, while additional flow steps progressively improve optimization quality.
  </figcaption>
</figure>

<div class="project-table-wrapper">
  <table class="project-results-table">
    <thead>
      <tr>
        <th>Task</th>
        <th>PGDFlow result</th>
        <th>Reference</th>
        <th>Efficiency</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>CIFAR-10 adversarial attack (ℓ<sub>2</sub>)</td>
        <td>92.53% ASR, 70.0 μs</td>
        <td>PGD-3: 92.01%, 254.3 μs</td>
        <td>3.6× faster</td>
      </tr>
      <tr>
        <td>Quadratic black-box optimization (d = 512)</td>
        <td>0.969 relative decrease, 3.59 s</td>
        <td>Estimated gradient: 0.962, 6.29 s</td>
        <td>1.75× faster</td>
      </tr>
      <tr>
        <td>2D XY model (64 × 64)</td>
        <td>0.004 energy error, 9.0 ms</td>
        <td>Gradient flow: 32.1 ms</td>
        <td>3.6× faster</td>
      </tr>
    </tbody>
  </table>
</div>

Across MNIST, Fashion-MNIST, CIFAR-10, and SVHN, the one-step MeanFlow variant consistently outperformed single-step gradient baselines. On CIFAR-10 under the ℓ<sub>2</sub> constraint, optimization-guided fine-tuning raised the attack success rate from 71.14% to 92.53%, slightly exceeding PGD-3 while substantially reducing latency. The experiments on black-box functions and the 2D XY model further show that the approach transfers beyond adversarial attacks while preserving strong optimization quality.

## My Contributions

- Developed the PGDFlow formulation that recasts iterative optimization as conditional generative modeling.
- Implemented the flow-matching and MeanFlow variants together with optimization-guided fine-tuning, noise modulation, and multi-noise selection.
- Designed and conducted experiments across adversarial attacks, black-box optimization, and physics-based energy minimization, including efficiency and solution-quality analyses.

## Resources

- **Paper:** *PGDFlow: From Backpropagation to Forward Generation via Flow Matching* — manuscript in preparation.
- **Authors:** Xiao Cao, Zening Xuan, Hao Xiong, Liangliang Shi, and Junchi Yan.
- **Code:** Coming soon.
