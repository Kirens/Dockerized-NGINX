# Example: serving static files
Using the [local persist volume](https://github.com/CWSpear/local-persist)
plugin for docker we can easily put a name on an arbitrary node that may later
be referenced by the main NGINX container.

Unfortunately docker-compose cannot expand the local paths in the `mountpoint`
option and doesn't allow using environment variables. In this example there is
instead a simple script to ease mounting and unmounting of the volume.
