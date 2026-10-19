---
title: "PGDFlow: From Backpropagation to Forward Generation via Flow Matching"
short_title: "PGDFlow"
date: 2026-01-01
period: "Ongoing Research"
order: 2
summary: "Investigating optimization as conditional generation by learning distributions of solutions from iterative optimizers."
tags:
  - Flow Matching
  - Generative Models
  - Optimization
status: "Ongoing Research · Manuscript in preparation"
---

*Ongoing research · Manuscript in preparation*

## Overview

PGDFlow explores how generative models can learn from iterative optimizers and reuse that knowledge across related problem instances. Rather than running gradient-based search independently for every new input, the project investigates learning a conditional distribution of optimizer solutions and generating candidates through forward computation.

The research starts with adversarial example generation and also examines black-box function optimization and energy minimization in a two-dimensional XY model.

## Motivation

Projected Gradient Descent (PGD) repeatedly computes gradients and projects updates onto a feasible region. Random restarts can lead to different valid solutions for the same input, motivating a distributional view of optimization.

An important research question is which aspects of these solutions can be shared across inputs and learned in advance. The project studies shared directions, solution modes, and instance-specific variation, rather than treating every optimizer output as an isolated target. This perspective motivates conditional generation as an alternative to predicting an averaged solution through regression.

## Method Overview

<figure class="project-figure">
  <img
    src="{{ '/assets/images/projects/pgdflow/pgdflow-overview.png' | relative_url }}"
    alt="Conceptual comparison of iterative PGD and conditional generation, followed by solution construction, flow matching training, and forward sampling"
  >
  <figcaption>
    PGDFlow investigates a transition from iterative optimization to conditional generation: constructing optimizer solutions, learning a flow, and generating candidates through forward sampling.
  </figcaption>
</figure>

The framework is organized around three stages:

1. **Solution construction.** Use iterative optimization to obtain example solutions for related inputs.
2. **Conditional generative modeling.** Learn a flow from a noise distribution to candidate solutions, conditioned on the original input.
3. **Forward generation.** Generate candidates with forward evaluations and apply the relevant feasibility constraints.

Current work also investigates conditioning on solution modes, such as the landing class in adversarial example generation, and learning input-dependent noise priors. These directions explore how solution structure and sampling choices relate to optimization quality and diversity.

Training can use optimizer-generated examples and task gradients. At inference, the aim is to generate candidates through forward computation without repeating the optimizer's backward iterations.

## Ongoing Evaluation

The project is evaluating the approach across adversarial example generation, black-box optimization, and physics-based energy minimization. The investigation considers solution quality, computational cost, and diversity, together with the limits of transferring optimization behavior across inputs.

## My Contributions

- Developing the formulation of optimization as conditional generative modeling.
- Investigating the structure of optimizer solutions and mode-conditioned generation.
- Implementing and evaluating flow-based models and approaches to controlling the sampling distribution.

## Research Status

**Ongoing research · Manuscript in preparation.** This page presents the research motivation and general approach. Experimental results, numerical comparisons, and detailed training configurations are not included while the work is being developed.

**Authors:** Xiao Cao, Zening Xuan, Liangliang Shi, and Hao Xiong.
