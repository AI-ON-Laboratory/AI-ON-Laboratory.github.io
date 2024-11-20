![Tool image](../assets/master.jpg){: .styled-image}

## Get wifi access 🛜

The access to wifi in Cascina Rosa is linked to the MAC address of your device.
To get you MAC address, follow the instructions below:

- Windows: open a command prompt and run the command `getmac`

- MacOS/Linux: open a terminal and run the command `ifconfig | grep ether`

Give the MAC address to Vanja, she will forward it to the IT department.

## Set up for coding 💻

### Install Python 3.11 🐍

- If you have a Windows machine, download Python 3.11 from the Microsoft Store
- Otherwise
    1. Go to the official Python download page: <https://www.python.org/downloads/>
    2. Click on the "Download Now" button for Python 3.11.
    3. Save the installer to your computer and run it.
    4. Follow the installation prompts to install Python 3.11.

### Install Visual Studio Code 📁

Visual Studio Code is a lightweight code editor that supports Python development. Follow these steps to install VSCode on your computer:

- If you have a Windows machine, download VSCode from the Microsoft Store
- Otherwise
    1. Go to the official VSCode download page: <https://code.visualstudio.com_download/>
    2. Click on the "Download" button for your operating system (Windows, macOS, or Linux).
    3. Save the installer to your computer and run it.
    4. Follow the installation prompts to install VSCode.

### Install Jupyter Extension in VSCode 📓

Jupyter is an interactive computing environment that allows you to write and run Python code in a notebook format. Follow these steps to install the Jupyter extension in VSCode:

1. Open VSCode.
2. Click on the Extensions icon in the left sidebar or press `Ctrl + Shift + X` (Windows/Linux) or `Cmd + Shift + X` (macOS).
3. Search for "Jupyter" in the Extensions Marketplace.
4. Click on the "Jupyter" extension by Microsoft.
5. Click the "Install" button to install the extension.
6. Open a new terminal in VSCode by clicking on the "Terminal" button in the top menu or pressing `Ctrl + Shift + ` (Windows/Linux) or `Cmd + Shift + ` (macOS).
7. Run the following command to install the Jupyter kernel: ```bash python -m pip install ipykernel```

### Setting up Git 📦

Git is a version control system that allows you to track changes in your code and collaborate with others. Follow these steps to set up Git on your computer:

1. Download and install Git from the official website: <https://git-scm.com/downloads>
2. Open a terminal and run the following commands to configure Git with your name and email address:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "Your email address"
    ```
3. Check that Git is installed correctly by running the following command:
    ```bash
    git --version
    ```
4. If you see the Git version number, Git is installed correctly.

### Entering the AI-ON-Laboratory GitHub organization 🏢

The AI-ON-Laboratory GitHub organization is where you will submit your code for the thesis project. Follow these steps to enter the organization:

If you don't have a GitHub account, follow these steps to create one:

1. Go to the GitHub website: <https://github.com>
2. Click on the "Sign up" button and follow the instructions to create an account.
3. Verify your email address to complete the registration process.

Once you have a GitHub account, follow these steps to enter the AI-ON-Laboratory organization:

1. Give your GitHub username to a member of the Lab, we will send you an invitation to join the AI-ON-Laboratory organization.
2. Check your email for the invitation and click on the link to accept it.
3. Log in to your GitHub account to confirm your membership in the organization.

### Create a GitHub repository within the organization 📂

A GitHub repository is a remote location where you can store and share your code with others. Follow these steps to create a GitHub repository for your project:

1. Go to the GitHub website: <https://github.com>
2. Log in to your GitHub account.
3. Click on the "+" icon in the top right corner and select "New repository".
4. Since you are working on a project for the AI-ON-Laboratory, make sure to select the "AI-ON-Laboratory" organization in the "Owner" dropdown menu.
5. Enter a name for your repository. It must be in the form "YEAR_LASTNAME_PROJECTDESCRIPTION" (e.g., "2024_ROSSI_ImageClassification").
6. Add a description for your repository (optional).
7. Since you will be working with private data, make sure to select the "Private" option.
8. Click on the "Create repository" button to create the repository.

### Setting up the repository on VSCode 🔄

Once you have created the repository on GitHub, you can interact with it through VSCode using the GitLens extension. Follow these steps to install the GitLens extension in VSCode:

1. Open VSCode.
2. Click on the Extensions icon in the left sidebar or press `Ctrl + Shift + X` (Windows/Linux) or `Cmd + Shift + X` (macOS).
3. Search for "GitLens" in the Extensions Marketplace and install it.

Once you have installed the GitLens extension, you can clone the repository to your local machine:

1. Open the repository on GitHub.
2. Click on the "Code" button and copy the URL of the repository.
3. Open VSCode.
4. Click on the "Source Control" icon in the left sidebar or press `Ctrl + Shift + G` (Windows/Linux) or `Cmd + Shift + G` (macOS).
5. Click on the "Clone Repository" button.
6. Paste the URL of the repository in the input field and press `Enter`.
7. Select a location on your local machine to clone the repository.
8. Open the cloned repository in VSCode by clicking on the "Open Repository" button.

### Pushing your code to the repository 📤

Once you have written your code, you can push it to the repository on GitHub. Follow these steps to push your code to the repository:

1. Click on the "Source Control" icon in the left sidebar.
2. In the message field write a commit message shortly describing the changes you made.
3. Click on the "+" button on the right side of the files that you want to commit, in this way you will stage them.
4. Click on the "Commit" button to commit the changes.
5. Click on the "..." button and select "Push" to push the changes to the remote repository on GitHub.

If you are collaborating with others on the same repository, make sure to pull the latest changes before working on your code:

1. Click on the "Source Control" icon in the left sidebar.
2. Click on the "..." button and select "Pull" to pull the latest changes from the remote repository.

## Best Practices for Writing Python Code ✍️

### Writing Clean and Readable Code

*   Use meaningful variable names: avoid single-letter names and make sure the name clearly indicates the variable's purpose.
*   Keep functions and methods short and focused on a single task.
*   Use consistent naming conventions throughout your code (e.g., camelCase or underscore notation).
*   Organize your code using comments, docstrings, and whitespace.

### Following PEP 8 Guidelines

*   Keep lines of code short (80 characters or less) to improve readability.
*   Use consistent indentation (4 spaces or a consistent number of spaces).
*   Use blank lines to separate logical sections of code.
*   Use parentheses to group expressions and improve clarity.

### Writing Comments and Docstrings

*   Write comments to explain non-obvious code sections or complex logic.
*   Use docstrings to document functions, classes, and modules.
*   Keep comments and docstrings concise and accurate.
*   Use comment blocks to separate sections of code and improve organization.

### Error Handling and Debugging

*   Use try/except blocks to catch and handle exceptions.
*   Write descriptive error messages to help diagnose issues.
*   Use logging to track application events and errors.
*   Test your code thoroughly to catch bugs and edge cases.

### Version Control and Collaboration

*   Use version control systems (e.g., Git) to track changes and collaborate with others.
*   Write clear and descriptive commit messages.
*   Use branches to manage different versions of your code.
*   Follow established coding standards and best practices.



## Before submitting the thesis 🏁

*   Review your code for readability and reproducibility (e.g., set fixed random states in functions that require them).
*   Test your code thoroughly to ensure it works as expected.
*   Document your code using comments and docstrings.
*   Write a README file that explains how to run your code and reproduce your results.
*   After all your code and data is pushed to the repository, inform the Lab members that your work is ready for review.

## After submitting the thesis and graduating 🏆

*   Celebrate your achievement with your friends and family.
*   Update your LinkedIn profile and resume with your new skills and accomplishments.
*   REMOVE from your computer any sensitive data related to the project.

## Additional Resources 📚

- [Python Documentation](https://docs.python.org/3.11/)
- [PEP 8 Style Guide](https://pep8.org/)
- [VSCode Documentation](https://code.visualstudio.com/docs)
- [Jupyter Documentation](https://jupyter.org/documentation)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Stack Overflow](https://stackoverflow.com/) - for coding questions and troubleshooting
