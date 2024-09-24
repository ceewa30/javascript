


// Create a new list item when clicking on the "Add" button
document.getElementById("addTaskBtn").addEventListener("click", function() {
    // Get the value from the input field
    const inputValue = document.getElementById("taskInput").value;

    // Create a new list item
    const listItem = document.createElement("li");
    if (inputValue === '') {
        alert("You must write something!");
        return; // Exit the function if the input value is empty
    } else {
        // Set the text of the list item to the input value
        listItem.textContent = inputValue;

        // Append the list item to the unordered list
        document.getElementById("myUL").appendChild(listItem);

    }
    // Clear the input field
    document.getElementById("taskInput").value = "";

    // Add a "checked" class to the list item when clicked
    listItem.addEventListener("click", function() {
        this.classList.toggle("checked");
    });

    // Remove the list item when the "Delete" button is clicked
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    listItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function() {
        this.parentNode.remove();
    });
});