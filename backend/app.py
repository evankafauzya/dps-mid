from flask import Flask, request, send_from_directory, jsonify
import os
import random
from PIL import Image

FRONTEND_PATH = os.path.abspath('../frontend')  
TEMP_FOLDER = os.path.join(FRONTEND_PATH, 'temp')
DEMO_IMAGES_FOLDER = os.path.join(FRONTEND_PATH, 'demo_images')
os.makedirs(TEMP_FOLDER, exist_ok=True)

app = Flask(__name__)

def save_dummy_preview(image_path):
    with Image.open(image_path) as img:
        img = img.resize((640, 480))
        preview_path = os.path.join(TEMP_FOLDER, 'preview_debug.jpg')
        img.save(preview_path, format='JPEG')

def simulate_5s_analysis():
    shine = random.choice([
        "Yes, it is shine",
        "Not shine, item(s) detected: dust, clutter"
    ])
    sort = random.choice([
        "Yes, it is sort",
        "Not sort, item(s) detected: cable, bottle"
    ])
    set_in_order = random.choice([
        ("Yes, set in order", []),
        ("No, not set in order", ["Missing item: mouse", "Missing item: monitor"])
    ])
    return {
        'shine': shine,
        'sort': sort,
        'set_in_order': set_in_order[0],
        'set_in_order_reasons': set_in_order[1]
    }

@app.route('/api/5sproject', methods=['POST'])
def five_s_project_api():
    image_name = request.json.get('image_name')
    if not image_name:
        return jsonify({'error': 'No image selected'}), 400

    image_path = os.path.join(DEMO_IMAGES_FOLDER, image_name)
    if not os.path.isfile(image_path):
        return jsonify({'error': 'Image not found'}), 404

    save_dummy_preview(image_path)
    result = simulate_5s_analysis()
    return jsonify(result)

@app.route('/api/preview')
def serve_preview():
    return send_from_directory(TEMP_FOLDER, 'preview_debug.jpg')

@app.route('/api/demo-images')
def list_demo_images():
    images = [f for f in os.listdir(DEMO_IMAGES_FOLDER)
              if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    return jsonify(images)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
