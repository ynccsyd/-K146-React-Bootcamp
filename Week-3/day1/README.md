# REACT PAGINATION
- In this project you have to know:
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp; <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="Git" **alt="Git" width="40" height="40"/>
  
</div>

#### `run on the terminal`
```
npm create-react-app day1
npm i
npm start
```
---
- Now,  fetch the data It takes a URL as a parameter and makes a get request to it.

![image](https://user-images.githubusercontent.com/109158340/194676890-b3ff0353-0d11-4e88-a459-ec94da9af1a2.png)
---
- Create a table, that holds all the TODOS, will be created inside components.
---
## Pagination
- In pagination, you can choose how many records are to be displayed on a single page, according to which the number of pages is decided.
```
// User is currently on this page
const [currentPage, setCurrentPage] = useState(1);
```
- Now, take a subset of the data array with the indices calculated above using the slice function of JavaScript.
```
// Todos to be displayed on the current page
	const getDataWithPage = (page) => {
		return todos.slice((page - 1) * 10, page * 10); 
	};
```
- Calculate the number of pages
```
setTotalPage(Math.ceil(todos.length/15));
```
- Inside the component, create an array that holds all the page numbers from 1 to pages.
```
{Array.from({ length: totalPage }, (v, i) => i  + 1).map((page) => (
					<Button className = { page === currentPage ? 'btn btn-primary' : 'btn btn-outline-primary'}
						onClick={() => setCurrentPage(page)}
					>
						{page}
```
#### If you want [several ways](https://www.techiedelight.com/create-array-from-1-n-javascript/) to create an array from 1 to N in JavaScript, this is one of them.


- and set your buttons:
```
<Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} >
					Prev
				</Button>
				
				{Array.from({ length: totalPage }, (v, i) => i  + 1).map((page) => (
					<Button className = { page === currentPage ? 'btn btn-primary' : 'btn btn-outline-primary'}
						onClick={() => setCurrentPage(page)}
					>
						{page}

					</Button>

				))}

				<Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage}>
					Next
				</Button>

```

---






---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
