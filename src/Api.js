class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru";
        this.group = "group-8";
        this.token = token;
    }

    signUp(body) {
        body.group = this.group;
        return fetch(`${this.path}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }

    signIn(body) {
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }

    resetPassword() {
        return fetch(`${this.path}/password-reset/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            }
        });
    }

    changePassword(body) {
        return fetch(`${this.path}/password-reset/${this._id}/${this.token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
    }

    getUsers() {
        return fetch(`${this.path}/v2/group-8/users`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    getUserById(userId) {
        return fetch(`${this.path}/v2/group-8/users/${userId}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    getUserByToken() {
        return fetch(`${this.path}/v2/group-8/users/me`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    changeUserInfo(body) {
        return fetch(`${this.path}/v2/group-8/users/me`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }

    changeUserAvatar(body) {
        return fetch(`${this.path}/v2/group-8/users/me/avatar`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }

    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    getProductById(productId) {
        return fetch(`${this.path}/products/${productId}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    addProduct(body) {
        return fetch(`${this.path}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
    }

    modifyProduct(productId, body) {
        return fetch(`${this.path}/products/${productId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }

    deleteProduct(productId) {
        return fetch(`${this.path}/products/${productId}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    setLike(productId, isLike) {
        return fetch(`${this.path}/products/likes/${productId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                "authorization": `Bearer ${this.token}`            }
        })
    }

    addReview(productId, body) {
        return fetch(`${this.path}/products/review/${productId}`, {
            method: "POST",
            headers: {
                "authorization": `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }

    deleteReview(productId, reviewId) {
        return fetch(`${this.path}/products/review/${productId}/${reviewId}`, {
            method: "DELETE",
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    getReviews() {
        return fetch(`${this.path}/products/review/`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

    getProductReview(productId) {
        return fetch(`${this.path}/products/review/${productId}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }

}

export {Api};