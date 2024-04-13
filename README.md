# Ticket Design Screen - Angular Project

## Overview

This project implements a task design screen for a web application using Angular. The interface provides functionalities such as task management, tracking, and reporting. The primary elements include a dashboard for task statistics, a QR code for quick access, and a detailed list of tasks with associated actions.

## Interface Description

- **Statistics Card:** Displays a graph representing task completion over time and a dropdown menu for selecting the time frame.
- **QR Code Panel:** Shows a QR code for quick task access along with a progress percentage bar indicating the completion level of the tasks.
- **Task List:** A paginated table listing individual tasks with details such as task name, assignee, price, and status. Each entry has an action button for task-specific operations.
- **Navigation Bar:** Allows the user to switch between different pages of the task list.
- **Filter and Search:** Provides a search bar to filter tasks and buttons to adjust the view.

## Functionalities

- **Task Tracking:** Users can monitor the progress of tasks over different time periods.
- **Quick Access via QR:** Users can scan the QR code to get instant access to task details on their mobile devices.
- **Task Management:** Users can view, edit, and manage tasks directly from the list. Pagination supports navigating through a large number of tasks.
- **Search and Filter:** Users can search for specific tasks and filter the list based on their requirements.

## Running the Project

### Prerequisites

Ensure you have the following installed:
- Node.js
- Angular CLI

### Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/AdhamFares73/Ticket
   ```

2. Navigate to the project directory:
   ```
   cd Ticket
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
