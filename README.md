### `README.md`

```markdown
# DPS-Mid Fullstack App

A fullstack web application using **Flask** for the backend and **Nginx** for serving the frontend static files. It uses **Docker Compose** to run both services together.

---

## 📦 Project Structure

```

DPS-Mid/
├── backend/                 # Flask API server
│   └── app.py
├── frontend/                # Static site (HTML/CSS/JS + Nginx)
│   ├── index.html
│   ├── 5sproject.html
│   ├── style.css
│   ├── script.js
│   ├── images/
│   ├── files/
│   └── nginx.conf
├── docker-compose.yml
└── README.md

````

---

## 🚀 How to Run

Make sure Docker is installed and running, then:

```bash
docker compose up --build
````

---

## Access the Website

If everything builds successfully, open your browser and visit:

👉 **[http://localhost:8081](http://localhost:8081)**

* This serves the frontend via Nginx
* The Flask backend runs on `http://localhost:5001` and is proxied via Nginx for `/api/*` calls

---

## Notes

* The `/5sproject` page is static and connects to backend via REST API (`/api/5sproject`)
* Static frontend is served from `/usr/share/nginx/html` inside the container
* Make sure all assets (images, CSS, JS) are inside the `frontend/` folder

---

## Clean up

To stop and remove all containers and volumes:

```bash
docker compose down --volumes --remove-orphans
```

---

Feel free to fork and extend this project!

