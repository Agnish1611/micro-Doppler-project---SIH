from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
import cv2
from flask_cors import CORS  


app = Flask(__name__)
CORS(app)  


model = load_model('final model.h5')



@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400


    npimg = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)


    img = cv2.resize(img, (224, 224))  
    img = img.reshape((1, 224, 224, 3))  


    predictions = model.predict(img)[0]
    d={0:'3 long blade rotor',
    1: '3 short blade rotor',
    2:'bird',
    3:'bird with mini helicopter',
    4:'drone',
    5:'rc plane'}

    max_index = np.argmax(predictions)
    max_value = predictions[max_index]
    print(f"Probability: {max_value}, Class: {d[max_index]}")

    return jsonify({'class': d[max_index]})


if __name__ == '__main__':
    app.run(debug=True)
