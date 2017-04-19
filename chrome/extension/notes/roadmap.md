#ROADMAP

	# Wednesday 

	1. link searchbar to Firebase DB data.
	2. save data in localStorage or equivalent solution.
	3. allow extension for all urls
	4. 




	- this.addNotification invoke from execute();
	- fix Card header;
	- DESCRIPTION at the 
	bottom of the card?

	Fr 10
	- Configure D3 Menu;
	


# Components 

	3.

2. Extension Card Header Title, Avatar css classes/

1.  DONE var screenshot find a way to let it read it by next function 

0. CARD: correct photo layout;

# Architecture, Config

	1. allow extension for all_urls 

# Notes 

	@ Card Header 	

# ROADMAP

	1. build right-click 
	2. radial/flower menu;
		1) attach onclick event handlers to single icons;
		2) 


	3. allow for all-urls;
	4. Firebase
	5 Pinterest-like Web App that
	  makes heavy use of onHover. 

	  JUST DO THE ABOVE FOR NOW.


----------- reusable code

children: (
         <CardAntd 
         style={{ width: 320, height: 320 }}
         bodyStyle={{ padding: 0 }}
         >
         <CardTitle
          avatar={link.href}
          title={/*`\b \b \b  `*/ title }
          subtitle={descriptionNull}
        />
            <img src={this.state.screenshot} width="100%" />
          </CardAntd>
       )



