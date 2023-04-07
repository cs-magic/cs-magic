# notes

## nginx relative

### bridge from frontend to backend


use this:

```nginx.conf
location  /foo {
  rewrite /foo/(.*) /$1  break;
  proxy_pass         http://localhost:3200;
  proxy_redirect     off;
  proxy_set_header   Host $host;
}
```

todo: /backend/docs --> /openapi.json router

ref: https://serverfault.com/a/379679

