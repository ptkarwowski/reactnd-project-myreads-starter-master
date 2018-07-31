import React from 'react';
import {
	Route
} from 'react-router-dom'
import SearchPage from './SearchPage';
import MainPage from './StartPage';
import * as BooksAPI from './BooksAPI'
import './App.css'
class BooksApp extends React.Component {
	state = {
		books: []
	}
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({
				books: books
			})
		})
	}
	mShelf = (book, shelf) => {
		BooksAPI.update(book, shelf);
		BooksAPI.getAll().then((books) => {
			this.setState({
				books: books
			})
		})
	}
	render() {
		return ( < div className = "app" > < Route exact path = "/"
			render = {
				() => ( < MainPage books = {
						this.state.books
					}
					mShelf = {
						this.mShelf
					}
					/>)
			}
			/> < Route path = "/search"
			render = {
				() => ( < SearchPage mShelf = {
						this.mShelf
					}
					books = {
						this.state.books
					}
					/>)
			}
			/> < /div>)
	}
}
export default BooksApp
