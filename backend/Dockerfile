# Use a lightweight Python base image
FROM python:3.11-slim

# Install system dependencies needed by Pillow
RUN apt-get update && \
    apt-get install -y libjpeg-dev zlib1g-dev && \
    rm -rf /var/lib/apt/lists/*

# Set working directory inside container
WORKDIR /app

# Copy all project files
COPY . .

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose Flask app port
EXPOSE 5001

# Run the Flask application
CMD ["python", "app.py"]
