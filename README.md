# Barishal — Tourism Web Application

A full-stack tourism application for exploring Barishal, Bangladesh. The application brings together city information, local attractions, travel tips, and guide enquiries through a Vue.js frontend and a Django REST API.

This project demonstrates frontend development, relational data modelling, REST API integration, authentication, and image uploads.

> **Project status:** Development project. Production deployment and comprehensive automated testing remain future work. Guide enquiries are contact requests, not confirmed bookings or payments.

## Features

- **City exploration:** City descriptions, history, quick facts, neighbourhoods, transport information, and recommended visiting periods.
- **Local attractions:** Browse attractions and submit attraction information with images.
- **Travel tips:** View travel guidance retrieved from the backend.
- **User accounts:** Registration and login integrated with Djoser and JWT authentication.
- **Guide enquiries:** Submit contact details and a message requesting local guidance or travel assistance.
- **Content administration:** Manage city information, attractions, tips, and enquiries through Django admin.
- **Responsive layouts:** Vue components styled with Tailwind CSS and Preline.

## Technology Stack

| Layer | Technologies |
| --- | --- |
| Frontend | Vue 3, Vue Router, Vuex, Vite |
| Styling | Tailwind CSS, Preline, Heroicons, Bootstrap Icons, Font Awesome |
| Backend | Python, Django, Django REST Framework |
| Authentication | Djoser, Simple JWT |
| Database | SQLite |
| Image handling | Django media uploads, Pillow |

## Architecture

The Vue frontend communicates with Django REST endpoints using the Fetch API. Django models store city information, attractions, travel tips, and visitor enquiries in SQLite. Uploaded images are stored in the backend media directory. Vuex manages authentication and application data on the client, while Vue Router controls navigation.

## Repository Structure

| Path | Purpose |
| --- | --- |
| `base/manage.py` | Django management commands |
| `base/base/` | Backend settings and root URL configuration |
| `base/api/` | Models, serializers, API views, routes, and migrations |
| `barishal/src/views/` | Public, authentication, and user-facing pages |
| `barishal/src/router/` | Routes and navigation guards |
| `barishal/src/store/` | Vuex authentication, city, and attraction state |
| `barishal/src/services/` | API request and token helpers |
| `barishal/src/config.js` | Shared backend URL configuration |
| `requirements.txt` | Python dependency list |

## Run Locally

### Prerequisites

- Python with `pip` and `venv`; Python 3.10 or newer is needed for Django 5.2.
- Node.js and npm compatible with the project's Vite 6 dependency.
- Git.

Python dependencies are currently unpinned. The steps below should be verified in your local environment; they are not a tested compatibility guarantee.

### 1. Clone the repository

```bash
git clone https://github.com/Fahadbcd17/barishal.git
cd barishal
```

### 2. Create a Python environment

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Or on macOS/Linux:

```bash
source .venv/bin/activate
```

### 3. Install dependencies and start Django

Run from the repository root:

```bash
python -m pip install -r requirements.txt
python -m pip install "Django>=5.2,<5.3" djangorestframework-simplejwt
cd base
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The additional installation command explicitly installs Django and Simple JWT, which the application uses but the current requirements file does not directly list.

The backend runs at `http://127.0.0.1:8000/`. Open `http://127.0.0.1:8000/admin/` and sign in with the superuser account.

### 4. Add initial content

Use Django admin to create a city named Barishal and add related attractions, facts, neighbourhoods, transport information, and travel tips.

Several frontend views currently request **city ID `1`**. Ensure the intended city has that ID, or update the hardcoded selections in the frontend. Upload images as needed. There is no documented automated seed-data workflow.

### 5. Start the frontend

Open a second terminal at the repository root:

```bash
cd barishal
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Keep both development servers running. If browser requests are blocked by CORS, configure Django's CORS settings to allow the exact frontend origin.

## API Overview

Paths below are relative to `http://127.0.0.1:8000`.

| Endpoint | Purpose |
| --- | --- |
| `/api/auth/users/` | Account registration |
| `/api/auth/users/me/` | Current user details |
| `/api/auth/jwt/create/` | Obtain JWT access and refresh tokens |
| `/api/auth/jwt/refresh/` | Refresh an access token |
| `/api/city/` | City records |
| `/api/city/<id>/` | Individual city details |
| `/api/currentcity/` | Stored current-city selection |
| `/api/attraction/` | Attraction records |
| `/api/tips/` | Travel tips |
| `/api/message/` | Visitor enquiries |

Attraction, tip, and message views require authentication. JWT requests use the `Authorization: Bearer <access_token>` header. Authentication does not yet provide complete record ownership or administrator-only write restrictions across all endpoints.

## Frontend Build

From the frontend directory:

```bash
npm run build
npm run preview
```

Vite generates frontend assets in `barishal/dist/`, relative to the repository root. The preview command serves the build locally; it does not deploy the Django backend.

## Current Limitations and Planned Improvements

- Replace hardcoded local API URLs with consistent environment-based configuration. Changing `src/config.js` alone does not update every request.
- Add backend ownership and role checks for write operations and access to visitor enquiries.
- Check HTTP response status in the guide enquiry form before displaying success.
- Add automated tests; the backend test module currently contains only a placeholder.
- Pin dependencies and verify installation from a clean environment.
- Complete production configuration, including secret management, HTTPS, allowed hosts, CORS, token lifetimes, and static/media serving.
- Add screenshots and a demonstration video.

## Author

Developed by [Fahadbcd17](https://github.com/Fahadbcd17).
