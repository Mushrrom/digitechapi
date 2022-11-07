# Digitech api

This is a serverless api created for my digitech project

This uses the [usda.gov](https://nal.usda.gov) food info api. You will need to set the APIKEY env variable in order for this work

This was created because small basic can't do JSON formatting and i wanted to do this. It returns the KCAL per gram in the entered food

## How to use

1. Download the code
2. open the directory in a terminal and run `npm i` (requires [node.JS](https://nodejs.org/en/))
3. Run `vercel --prod` (requires [vercel cli](https://vercel.com/docs/cli))
4. Go to [your api name].vercel.app/api?item=[food]
