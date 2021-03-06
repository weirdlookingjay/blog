var deleteBtn = document.querySelector("#deleteBtn");
var deleteLink = document.querySelectorAll("#deletePost");

deleteLink.forEach(function(el) {
    el.addEventListener("click", function(e) {
        e.preventDefault();

        if (confirm("Are you sure you want to delete this?")) {
            var formData = new FormData();

            formData.append("postID", el.dataset.post);
            formData.append("blogID", el.dataset.blog);

            var httpRequest = new XMLHttpRequest();

            if (httpRequest) {
                httpRequest.open('POST', 'http://blogger.local/backend/ajax/removePostByLink.php', true);
                httpRequest.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        if (this.responseText - length != 0) {
                            alert(this.responseText);
                        }
                        location.reload(true);
                    }
                }
                httpRequest.send(formData);
            }
        }
    });
});

deleteBtn.addEventListener("click", function (e) {
    var checkBox = document.querySelectorAll(".postCheckBox");
    var postIDs = new Array();
    var blogIDs = new Array();

    checkBox.forEach(function (el) {
        if (el.checked) {
            postIDs.push(el.value);
            blogIDs.push(el.dataset.blog);
        }
    });

    if (postIDs.length > 0) {
        if (confirm("Are you sure you want to delete this?")) {
            var formData = new FormData();

            formData.append("postIDs", JSON.stringify(postIDs));
            formData.append("blogIDs", JSON.stringify(blogIDs));

            var httpRequest = new XMLHttpRequest();

            if (httpRequest) {
                httpRequest.open('POST', 'http://blogger.local/backend/ajax/removePosts.php', true);
                httpRequest.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        if (this.responseText - length != 0) {
                            alert(this.responseText);
                        }
                        location.reload(true);
                    }
                }
                httpRequest.send(formData);
            }
        }
    } else {
        alert("No Posts are selected!");
        location.reload(true);
    }
});