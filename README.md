# AA-Developers

Static website for AA-DEVELOPERS (plain HTML, CSS and JavaScript, no build step, no backend).

## Pages
- `/` Home, My Apps, About Us, Contact
- `/apps/wallrush-x/` and `/apps/arrow-rush/` app detail pages
- `/wallrush/delete-account/` and `/arrow-rush/delete-account/` account deletion request pages
- `/app-ads.txt` plain-text AdMob authorization file

## Run locally
```
python3 -m http.server 8000
```
Then open http://localhost:8000/

## app-ads.txt and AdMob (important)
`app-ads.txt` is kept in this project, so it is served at `https://asadullah-a.github.io/AA-Developers/app-ads.txt`. That is a project path, not the domain root, and on its own it does **not** satisfy AdMob verification.
AdMob looks for `/app-ads.txt` at the root of the developer website domain. To serve it there, create a separate repository named `AsadUllah-A.github.io`, add the same `app-ads.txt` at its root (so it is available at `https://asadullah-a.github.io/app-ads.txt`), and set the developer website in your Google Play listing to `https://asadullah-a.github.io`. Then check the status in AdMob. Crawling can take time.
