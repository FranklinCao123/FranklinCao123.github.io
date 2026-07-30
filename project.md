---
layout: base
title: Projects
permalink: /projects/
---

<section class="projects-page">
  <header class="projects-header">
    <p class="projects-kicker">Selected Work</p>
    <h1>Projects</h1>
    <p>
      Selected projects at the intersection of artificial intelligence and
      scientific research.
    </p>
  </header>

  <div class="project-grid">
    {% assign sorted_projects = site.projects | sort: "order" %}
    {% for project in sorted_projects %}
      <article class="project-card">
        {% if project.image %}
          <a class="project-card__image" href="{{ project.url | relative_url }}">
            <img src="{{ project.image | relative_url }}" alt="{{ project.title | escape }}">
          </a>
        {% endif %}

        <div class="project-card__content">
          <p class="project-card__period">{{ project.period }}</p>
          <h2>
            <a href="{{ project.url | relative_url }}">
              {{ project.short_title | default: project.title }}
            </a>
          </h2>
          <p>{{ project.summary }}</p>

          {% if project.tags %}
            <ul class="project-tags" aria-label="Project topics">
              {% for tag in project.tags %}
                <li>{{ tag }}</li>
              {% endfor %}
            </ul>
          {% endif %}

          <a class="project-card__link" href="{{ project.url | relative_url }}">
            View project <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
