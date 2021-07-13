Project: Meet App: Create a serverless PWA using React and TTD

	• Serverless: No backend maintenance, easy to scale, always available, no cost for idle time. 
	• PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.
	• Using a TDD approach, write tests before writing the actual functionality of app in code
	• Add  graphs to  app, which will make it more visually appealing and allow  conclusions to be drawn from the data
	• 2 charts—one that shows how many events will take place in that city on upcoming days, and another that visualizes the popularity of event genres in the form of a pie chart
	• Users of this app will be able to use it whenever they want to view upcoming events for a specific city
	• The server, in this case, is a serverless function hosted by a cloud provider (e.g., AWS). 
	• The app will hosted online to make it shareable and installable.
	• App can be used even when the user is offline. 
	• Responsive, (displays well on any device.)
	• PWA provides great user experience and performance
	• TDD technique ensures  quality of code and adequate test coverage

Key Features 
	1. Filter events by city. 
	2. Show/hide event details. 
	3. Specify number of events. 
	4. Use the app when offline.
	5. Add an app shortcut to the home screen. 
	6. View a chart showing the number of upcoming events by city.


FEATURE 1: FILTER EVENTS BY CITY
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
	User Story: As a [user], I should be able to [open main page], and [see a list of all upcoming events]
	Gherkin: Given [user hasn't searched for a city], when [user opens app], then [user should see a list of all upcoming events 
Scenario 2: User should see a list of suggestions when they search for a city.
	User Story: As a [user], I should be able to [type a city into search box],  and [see a list of suggested cities]
	Gherkin: Given [user has started typing a city into search box], when user [types the name of a city in search box], the [user should get a list of cities that match search criteria]
Scenario 3: User can select a city from the suggested list.
	User Story: As a [user], I should be able to [type the name a of a city into search box and receive a list of suggested cities], then [select a city from list and see filtered events in only that particular city] 
	Gherkin: Given [user was typing "Montreal" in city text box & list of suggested cities is showing], then [user selects a city from list (ex: Montreal)], then [their city is changed to that city, and user receives a list of upcoming events in that city 
	

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
Scenario 1: An event element is collapsed by default.
	User Story: As a [user], I should be able to [open Main page], and [see a list of upcoming events]
	Gherkin: Given [user hasn't search for a city], when [user opens main page], then [user should see a list of all upcoming events]
Scenario 2: User can expand an event to see its details.
	User Story: As a [user], I should be able to [click the "Show Details" button of a particular event], and [open modal displaying details for that particular event]
	Gherkin: Given [list of events has been loaded], when [user clicks "Show Details" button], then [event element expanded to show event details]
Scenario 3: User can collapse an event to hide its details.
	User Story: As a [user], I should be able to [once "Show details" modal open, click the "Hide Details" button], then [collapse "Details" modal and return to list of events]
	Gherkin: Given [user has clicked "Show Details" button for an event, and that event's "Details" modal is showing], when [user clicks "Hide Details" button], then [user can collapse modal and return to list of events]


FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When user hasn’t specified a number, 32 is the default number.
	User Story: As a [user], I should be able to [open Main page], then [see 32 (default) events per page in events list]
	Gherkin: Given [user hasn't specified number of events listed per page], when [user opens Main page], then [user should see list of 32 events per page]
Scenario 2: User can change the number of events they want to see.
	User Story: As a [user], I should be able to [click number dropdown menu], then [selected number of events listed per page]
	Gherkin: Given [user has clicked number dropdown menu], when [user selects number from menu], then [that number of events is listed per page]


FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection.
	User Story: As a [user], I should be able to [load cached data], then see events for previous search / main page]
	Gherkin: Given [user has previously loaded events page or search for a city], when [user opens app without internet connection], then [user should see cached data for last loaded page]
Scenario 2: Show error when user changes the settings (city, time range).
	User Story: As a [user], when [user attempts a new search for city while offline], then [user should receive error message as data for new search not available offline]
	Gherkin: Given [user has previously loaded app, and event's page loaded in cached files], when [user attempts new search for city while offline], then [user should receive error message]


FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city.
	User Story: As a [user], I should be able to [load a variable chart], when [user opens modal for chart with events for that city]
	Gherkin: Given [list of upcoming events has been loaded], when [user clicks modal for chart of upcoming events in each city], then [modal with chart showing number of upcoming events in each city is loaded] 


DevDependencies: 
gh-pages 3.1.0
enzyme
legacy-peer-deps @wojtekmaj/enzyme-adapter-react-17
cucumber
puppeteer

Dependencies:
create-react-app "" cra-template-pwa
serverless (global)
googleapis@59.0.0(auth-server)
http-server (global)
axios
nprogress
atatus-spa
material-ui/core (+ peer dependencies)
material-ui/icons
react-router-dom
