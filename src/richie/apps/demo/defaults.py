"""Parameters that define how the demo site will be built."""
from django.conf import settings

from .utils import pick_image

DEFAULT_DEMO_SITE_DOMAIN = "https://eclass.vn"
DEFAULT_LMS_ENDPOINT = "https://lms.eclass.vn"

NB_OBJECTS = {
    "courses": 75,
    "course_courseruns": 5,
    "course_icons": 3,
    "course_organizations": 3,
    "course_persons": 6,
    "course_subjects": 2,
    "person_organizations": 3,
    "person_subjects": 3,
    "organizations": 24,
    "licences": 5,
    "persons": 50,
    "blogposts": 26,
    "blogpost_levels": 1,
    "blogpost_tags": 1,
    "programs": 6,
    "programs_courses": 4,
    "home_blogposts": 5,
    "home_courses": 7,
    "home_organizations": 4,
    "home_subjects": 6,
    "home_persons": 4,
    "home_programs": 4,
}
NB_OBJECTS.update(getattr(settings, "RICHIE_DEMO_NB_OBJECTS", {}))

PAGES_INFO = {
    "home": {
        "title": {"vi": "Home", },
        "in_navigation": False,
        "is_homepage": True,
        "template": "richie/homepage.html",
    },
    "blogposts": {
        "title": {"vi": "News",},
        "in_navigation": True,
        "template": "courses/cms/blogpost_list.html",
    },
    "courses": {
        "title": {"vi": "Courses",},
        "in_navigation": True,
        "template": "search/search.html",
    },
    "categories": {
        "title": {"vi": "Categories",},
        "in_navigation": True,
        "template": "courses/cms/category_list.html",
    },
    "organizations": {
        "title": {"vi": "Organizations",},
        "in_navigation": True,
        "template": "courses/cms/organization_list.html",
    },
    "persons": {
        "title": {"vi": "Persons", },
        "in_navigation": True,
        "template": "courses/cms/person_list.html",
    },
    "programs": {
        "title": {"vi": "Programs", },
        "in_navigation": True,
        "template": "courses/cms/program_list.html",
    },
    "annex": {
        "title": {"vi": "Annex", },
        "in_navigation": False,
        "template": "richie/single_column.html",
        "children": {
            "annex__about": {
                "title": {"vi": "About",},
                "in_navigation": True,
                "template": "richie/single_column.html",
            },
            "annex__sitemap": {
                "title": {"vi": "Sitemap", },
                "in_navigation": True,
                "template": "richie/single_column.html",
            },
            "login-error": {
                "title": {"vi": "Login error",},
                "in_navigation": False,
                "template": "richie/single_column.html",
            },
        },
    },
}
PAGES_INFO.update(getattr(settings, "RICHIE_DEMO_PAGES_INFO", {}))


LEVELS_INFO = {
    "page_title": {"vi": "Level",},
    "children": [
        {"page_title": {"vi": "Beginner", }},
        {"page_title": {"vi": "Advanced", }},
        {"page_title": {"vi": "Expert", }},
    ],
    "page_reverse_id": "levels",
}
LEVELS_INFO.update(getattr(settings, "RICHIE_DEMO_LEVELS_INFO", {}))

PARTNERSHIPS_INFO = {
    "page_title": {"vi": "Partnership", },
    "children": [
        {"page_title": {"vi": "Gold", }},
        {"page_title": {"vi": "Silver", }},
        {"page_title": {"vi": "Bronze", }},
    ],
    "page_reverse_id": "partnerships",
}
PARTNERSHIPS_INFO.update(getattr(settings, "RICHIE_DEMO_PARTNERSHIPS_INFO", {}))

TAGS_INFO = {
    "page_title": {"vi": "Tag", },
    "children": [
        {"page_title": {"vi": "Event", }},
        {"page_title": {"vi": "Feature", }},
        {"page_title": {"vi": "Around the course", }},
        {"page_title": {"vi": "Partner", }},
        {"page_title": {"vi": "Portrait", }},
        {"page_title": {"vi": "Recruitment", }},
    ],
    "page_reverse_id": "tags",
}
TAGS_INFO.update(getattr(settings, "RICHIE_DEMO_TAGS_INFO", {}))

SUBJECTS_INFO = {
    "page_title": {"vi": "Subject",},
    "children": [
        {
            "page_title": {"vi": "Science", },
            "children": [
                {
                    "page_title": {
                        "vi": "Agronomy and Agriculture",
                    }
                },
                {"page_title": {"vi": "Chemistry", }},
                {
                    "page_title": {
                        "vi": "Discovery of the Universe",
                    }
                },
                {"page_title": {"vi": "Environment", }},
                {
                    "page_title": {
                        "vi": "Mathematics and Statistics",
                    }
                },
                {
                    "page_title": {
                        "vi": "Tools for Research",
                    }
                },
                {"page_title": {"vi": "Physics", }},
                {
                    "page_title": {
                        "vi": "Cognitive science",
                    }
                },
                {
                    "page_title": {
                        "vi": "Earth science and science of the Universe",
                    }
                },
                {"page_title": {"vi": "Life science", }},
                {
                    "page_title": {
                        "vi": "Engineering science",
                    }
                },
            ],
        },
        {
            "page_title": {
                "vi": "Human and social sciences",
            },
            "children": [
                {"page_title": {"vi": "Communication", }},
                {
                    "page_title": {
                        "vi": "Creation, Arts and Design",
                    }
                },
                {
                    "page_title": {
                        "vi": "Culture and Civilization",
                    }
                },
                {
                    "page_title": {
                        "vi": "Social Issues and Social Policy",
                    }
                },
                {"page_title": {"vi": "Geography", }},
                {"page_title": {"vi": "History", }},
                {"page_title": {"vi": "Innovation", }},
                {"page_title": {"vi": "Literature", }},
                {"page_title": {"vi": "Media", }},
                {"page_title": {"vi": "Philosophy", }},
                {
                    "page_title": {
                        "vi": "Political science",
                    }
                },
                {
                    "page_title": {
                        "vi": "International relations",
                    }
                },
                {"page_title": {"vi": "Sports", }},
            ],
        },
        {"page_title": {"vi": "Law", }},
        {"page_title": {"vi": "Economy and Finance", }},
        {
            "page_title": {
                "vi": "Education and Training",
            }
        },
        {"page_title": {"vi": "Management", }},
        {"page_title": {"vi": "Entrepreneurship", }},
        {
            "page_title": {"vi": "Computer science", },
            "children": [
                {
                    "page_title": {
                        "vi": "Digital and Technology",
                    }
                },
                {
                    "page_title": {
                        "vi": "Telecommunication and Networks",
                    }
                },
                {"page_title": {"vi": "Coding", }},
            ],
        },
        {"page_title": {"vi": "Languages", }},
        {"page_title": {"vi": "Education and career guidance", }},
        {"page_title": {"vi": "Health", }},
    ],
    "page_reverse_id": "subjects",
}
SUBJECTS_INFO.update(getattr(settings, "RICHIE_DEMO_SUBJECTS_INFO", {}))

ICONS_INFO = {
    "page_title": {"vi": "Icons", },
    "children": [
        {
            "page_title": {"vi": "Academic", },
            "color": "#005c08",
            "fill_icon": pick_image("icons")("academic.png"),
        },
        {
            "page_title": {"vi": "Accessible", },
            "color": "#00a1d6",
            "fill_icon": pick_image("icons")("accessible.png"),
        },
        {
            "page_title": {"vi": "Closed caption",},
            "color": "#a11000",
            "fill_icon": pick_image("icons")("cc.png"),
        },
        {
            "page_title": {"vi": "Certificate", },
            "color": "#ffc400",
            "fill_icon": pick_image("icons")("certificate.png"),
        },
        {
            "page_title": {"vi": "Subtitles", },
            "color": "#6d00ba",
            "fill_icon": pick_image("icons")("subtitles.png"),
        },
    ],
    "page_reverse_id": "icons",
}
ICONS_INFO.update(getattr(settings, "RICHIE_DEMO_ICONS_INFO", {}))

HOMEPAGE_CONTENT = {
    "vi": {
        "banner_title": "Welcome to Richie",
        "banner_content": (
            """<h1 class="hero-intro__title">Welcome <strong>to Richie</strong></h1>"""
            """<p>It works! This is the default homepage for the Richie CMS.</p>"""
        ),
        "banner_template": "richie/large_banner/hero-intro.html",
        "button_template_name": "button-caesura",
        "section_template": "richie/section/section.html",
        "blogposts_title": "Last news",
        "blogposts_button_title": "More news",
        "courses_title": "Popular courses",
        "courses_button_title": "More courses",
        "organizations_title": "Universities",
        "organizations_button_title": "More universities",
        "persons_title": "Persons",
        "persons_button_title": "More persons",
        "programs_title": "Programs",
        "programs_button_title": "More programs",
        "subjects_title": "Subjects",
        "subjects_button_title": "More subjects",
    },
}
HOMEPAGE_CONTENT.update(getattr(settings, "RICHIE_DEMO_HOMEPAGE_CONTENT", {}))

SINGLECOLUMN_CONTENT = {
    "vi": {
        "banner_title": "Single column template sample",
        "banner_content": "It works! This is a single column page.",
        "banner_template": "richie/large_banner/hero-intro.html",
        "button_template_name": "button-caesura",
        "section_sample_title": "A sample section",
        "section_sample_button_title": "More!",
        "section_sample_template": "richie/section/section.html",
    },

}
SINGLECOLUMN_CONTENT.update(getattr(settings, "RICHIE_DEMO_SINGLECOLUMN_CONTENT", {}))

FOOTER_CONTENT = {
    "vi": [
        {"name": "About", "internal_link": "annex__about"},
        {"name": "Sitemap", "internal_link": "annex__sitemap"},
        {"name": "Style guide", "external_link": "/styleguide/"},
        {
            "title": "Richie community",
            "items": [
                {"name": "Website", "external_link": "https://richie.education"},
                {
                    "name": "Github",
                    "external_link": "https://github.com/openfun/richie",
                },
                {
                    "name": "Site factory",
                    "external_link": "https://github.com/openfun/richie-site-factory",
                },
                {
                    "name": "Example site",
                    "external_link": "https://www.fun-campus.fr",
                },
            ],
        },
    ],

}
FOOTER_CONTENT.update(getattr(settings, "RICHIE_DEMO_FOOTER_CONTENT", {}))

COURSE_CONTENT = {
    "vi": {"partners_title": "Partners", "sponsors_title": "Sponsors"},
}
COURSE_CONTENT.update(getattr(settings, "RICHIE_DEMO_COURSE_CONTENT", {}))

SITEMAP_PAGE_PARAMS = {
    "blogposts": {"max_depth": 1},
    "courses": {"max_depth": 1},
    "categories": {},
    "organizations": {"max_depth": 1},
    "persons": {"max_depth": 1},
    "programs": {"max_depth": 1},
    "annex": {"include_root_page": False},
}
