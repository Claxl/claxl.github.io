---
layout: page
title: UCHIHA
description: A domain-specific CGRA overlay with QAC-driven spatial reconfiguration for satellite vision.
img: assets/img/project_uchiha.jpg     # optional — drop an image here
importance: 1
category: research
---

**UCHIHA** is a domain-specific CGRA overlay for on-board satellite vision.
Each PE holds its own configuration registers, and the array is orchestrated
by an ARM hard-core over AXI. A runtime QAC-based metric drives spatial
reconfiguration — adapting the array layout to the incoming workload without
full re-synthesis.

The longer-term goal is an ASIC tape-out through open shuttle programs
(Google / SkyWater) to target the power and radiation constraints of real
spacecraft deployment.
