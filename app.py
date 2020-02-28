from flask import Flask, render_template, request, redirect, url_for
import pandas as pd
from collections import defaultdict
import os 
import json

app = Flask(__name__)
app._static_folder = os.path.abspath("templates/static/")

@app.route('/', methods=['GET', 'POST'])
def index():
	df = pd.read_csv('/Users/mwa0199/Desktop/geocode_project/geocode.csv').dropna(how = 'all')
	cols = tuple(zip(df.columns, df.iloc[0]))
	categories = defaultdict(list)
	for c in cols:
		categories[c[1]].append(c[0])


	return render_template('index.html', categories = categories)


'''
@app.route('/', methods=['GET', 'POST'])
def index():
	df = pd.read_csv('/Users/mwa0199/Desktop/geocode_project/geocode.csv').dropna(how = 'all')
	cols = tuple(zip(df.columns, df.iloc[0]))
	categories = defaultdict(list)
	for c in cols:
		categories[c[1]].append(c[0])
	json_object = json.dumps(categories)

	questions = df.iloc[0:2]
	answers = df.iloc[2:]

	demos = answers[answers.columns[answers.columns.isin(categories['Demographics'])]]
	study = answers[answers.columns[answers.columns.isin(categories['Study Parameters'])]]
	hazards = answers[answers.columns[answers.columns.isin(categories['Volcanic Hazards'])]]
	wind = answers[answers.columns[answers.columns.isin(categories['As the Wind Blows'])]]
	volcanos = answers[answers.columns[answers.columns.isin(categories['Volcano Parameters'])]]
	

	return render_template('index.html', table=df, categories = categories, jsonobject = json_object)
'''



if __name__ == '__main__':
	app.run(debug=True)