src
|    ├── app                     # Main application which contains React router, common configs for React app
|    ├── app-home                # Home container
|    │   ├── components          # Components, wrapper use only for Home
|    │   ├── hooks               # React hooks 
|    │   ├── packages.json       # Declare dependencies for `app-home`
|    │   └── ...                 # Other things like context, data...which use only for Home should stay inside `app-home`
|    ├──component-library        # Shared component across all container like Button, Form, Typography
|    └──common                   # Anything common can put in here if you couldn't find any reason to split it to a separate folder. E.g. logging, analytics...