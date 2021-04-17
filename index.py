from flask import Flask, request, abort

app = Flask(__name__)


@app.route('/webhook', methods=['PUT'])
def webhook():
	if request.method == 'PUT':
		print(request)
		return 'success', 200
	else:
		abort(400)


if __name__ == '__main__':
	app.run(debug = False,host='0.0.0.0')
