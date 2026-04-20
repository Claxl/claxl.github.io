---
layout: about
title: about
permalink: /
subtitle: >
  PhD Student @ <a href='https://necst.it'>NECSTLab</a>,
  <a href='https://www.polimi.it'>Politecnico di Milano</a>.
  Advised by <a href='https://conficconi.faculty.polimi.it/'>Prof. Davide Conficconi</a>.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to a circle
  more_info: >
    <p><strong>DEIB — Building 20</strong></p>
    <p>Via Giuseppe Ponzio 34/5</p>
    <p>20133 Milano, Italy</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true          # includes social icons at the bottom of the page

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I'm a first-year PhD student in Information Technology at
[NECSTLab](https://necst.it), Politecnico di Milano, working on
**measurement-driven hardware–software co-design of reconfigurable
architectures for adaptive space vision computing**. My application domain of
choice is **satellite on-board processing**: the setting where power, thermal,
and radiation constraints meet workloads that change as orbits, sensors, and
missions evolve.

My research is organized around three directions:

- **Workload characterization.** With *STAR-Bench*, a benchmark of roughly 24k
  satellite image registration tasks spanning terrain types and difficulty
  levels, I study what makes on-board vision hard — and what a realistic
  spacecraft compute target actually has to cover.
- **Runtime optimality metrics.** I develop a runtime
  *Quality–Accuracy Correlation (QAC)* metric with a *decision break-even
  point* that lets the system reason about when to reconfigure rather than
  when to recompute.
- **Reconfigurable architectures.** I design *UCHIHA*, a domain-specific CGRA
  overlay with QAC-driven spatial reconfiguration, orchestrated by an ARM
  hard-core over AXI, with a planned ASIC tape-out via Google/SkyWater open
  shuttle programs.

Before the PhD I completed my MSc at Politecnico di Milano, working on
satellite image registration on embedded FPGAs — including FPGA acceleration
of mutual information computation and the *Mixe* framework combining feature-
and intensity-based approaches.

Outside research I teach HLS on FPGAs in our lab courses, play fantacalcio
with too much seriousness, and occasionally get absorbed by programming games
like *The Farmer Was Replaced*.
