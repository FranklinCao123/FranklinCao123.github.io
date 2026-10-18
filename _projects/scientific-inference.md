---
title: "Machine Learning for Top-Quark EFT"
short_title: "Machine Learning for Top-Quark EFT"
date: 2024-03-01
period: "Ongoing Research"
order: 3
summary: "Connecting optimal observables with simulation-based inference for top-quark effective field theory."
tags:
  - Simulation-Based Inference
  - Optimal Observables
  - Particle Physics
status: "Ongoing Research"
---

*Ongoing research · Unpublished work*

## Overview

This project explores machine-learning-assisted statistical inference for top-quark effective field theory at future electron–positron colliders. It connects the optimal observable approach with simulation-based inference to study how information about new physics can be extracted from complex collider events.

## Motivation

Top-quark pair production and decay provide a valuable setting for studying interactions beyond the Standard Model within the Standard Model Effective Field Theory (SMEFT). The kinematic structure of these events carries information about the underlying interactions, motivating methods that can use correlations across the full event.

Traditional analyses often summarize events through selected angular distributions or other individual observables. Optimal observables offer a statistically motivated way to extract parameter-sensitive information. Applying them to realistic measurements, however, is challenging: parton showers, hadronization, and detector response transform the underlying event, making the detector-level likelihood difficult to evaluate directly.

## Physical Process

The study considers top-quark pair production in electron–positron collisions, followed by semileptonic decay. One W boson decays leptonically and the other hadronically, giving a final state containing a charged lepton, a neutrino, and jets.

<figure class="project-figure" id="figure-1">
  <a href="{{ '/assets/images/projects/scientific-inference/figure-1.png' | relative_url }}" aria-label="Open Figure 1 at full resolution">
    <img src="{{ '/assets/images/projects/scientific-inference/figure-1.png' | relative_url }}" alt="Feynman diagram of electron–positron annihilation into a top–antitop pair through a photon or Z boson, followed by semileptonic decay" width="666" height="453" loading="lazy" style="max-width: 460px; height: auto;">
  </a>
  <figcaption><strong>Figure 1.</strong> Top-quark pair production and decay in the semileptonic channel. One W boson decays into a charged lepton and neutrino; the other decays into quarks.</figcaption>
</figure>

The production and sequential decays can be described through angles defined in the relevant rest frames. Figure 2 illustrates the coordinate systems and decay planes used to describe this event geometry.

<figure class="project-figure" id="figure-2">
  <a href="{{ '/assets/images/projects/scientific-inference/figure-2.png' | relative_url }}" aria-label="Open Figure 2 at full resolution">
    <img src="{{ '/assets/images/projects/scientific-inference/figure-2.png' | relative_url }}" alt="Coordinate systems, production plane, and decay planes defining the angles of top-quark production and sequential decay" width="1050" height="708" loading="lazy" style="max-width: 620px; height: auto;">
  </a>
  <figcaption><strong>Figure 2.</strong> Angular conventions for top-quark production and sequential decay. The diagram relates the beam direction, top-quark production plane, and decay planes using right-handed coordinate systems.</figcaption>
</figure>

## Method Overview

The approach uses simulated events to connect information available in the underlying physics calculation with observable event features. A neural network learns parameter-sensitive summaries, or scores, that serve as a machine-learning counterpart of optimal observables.

These learned summaries support likelihood-based inference of EFT Wilson coefficients while accounting for the transformations between the underlying scattering process and reconstructed events. The project brings together analytical particle physics, event simulation, and statistical learning.

*This page provides a high-level overview of ongoing, unpublished research. Numerical results and implementation details are omitted.*
