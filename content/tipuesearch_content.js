var tipuesearch = {"pages": [{'title': 'About', 'text': '四設計二甲 41023119 呂承劼 \n github倉儲 :  https://github.com/mdecad2022/site-41023119 \n 個人網站 :  https://mdecad2022.github.io/site-41023119/content/index.html \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Progress Rate', 'text': '課程簡要 \n Week 1 :  中秋節放假。 \n Week 2 :  講解課程內容及評分、建立個人網站、倉儲。 \n Week 3 :  建立課程帳號及replit帳號，再 利用  replit  帳號所啟動的動態網站進行內容管理、將動態網站內容轉為靜態網站內容之後 ,  設法與  Github  倉儲同步。 \n Week 4 :  測試 exam.cycu.org 線上考試、建立可攜環境。 \n Week 5 :  說明網路設定與個人網頁維護、在  stud.cycu.org  建立帳號。 \n Week 6 :  利用  Replit  與自建的  Ubuntu  伺服器執行。 \n Week 7 :  將 acp 更新成新版本 ( 可在靜態網頁 acp) \n Week 8 :  exam線上考試及 開啟onshape、NX、Solvespace及零件檔並截圖上傳到自己的靜態網站 \n Week 9 :  期中考週( exam線上考試 ) \n Week 10 :   exam線上考試 \n Week 11 :  運動會放假 \n Week 12 :\xa0 exam線上考試 \n Week 13 :  Solvespace 編譯繪圖與應用 題目練習 \n Week 14 :  exam線上考試及  Solvespace 、NX2027 、Onshape 零組件繪圖考試 \n Week 15 :  Solvespace 編譯繪圖與應用 題目練習及 CoppeliaSim 模擬影片 \n Week 16 :  exam線上考試 \n Week 17 :  繪製第六週零件及期末作業 \n ==================================================================== \n 這學期一開始先講解課程內容及評分，再來建立個人網站及倉儲，而這部分在一年級的時候就已經會了所以操作比較快，第三週開始建立課程帳號、replit帳號將倉儲導入到repls這邊是為了可以利用replit開啟動態後推送到github，設法與  Github  倉儲同步這部分在動態網站介面登入時會無法登入，後來發現將動態網站展開就解決了，第四週測試 這學期使用的 線上考試及建立可攜環境，測試線上考試時因為第一次使用，介面不太聊解所以第一次考試的時候操作比較慢，第五週在說明網路設定與個人網頁維護及在  stud.cycu.org  建立帳號時，自己的stud.cycu.org裡後進到倉儲後執行 python3 server.py 後有時候會直接跳掉，再登入後會開不了靜態網站，後來詢問老師後發現輸入  ps axo pid,comm,uid | grep "python3"  這串指令可以看到自己的ip位置，再輸入kill -9 xxxxxxx(自己的ip)把自己的ip給kill後，接著再輸入 python3 server.py 就可以進入到自己的靜態網站了。第六週開始學習onshape、NX、Solvespace怎麼去操作及應用繪圖，在一年級下學期時有利用NX畫CNC有關的零件繪製，所以對NX比較熟悉，而Solvespace及onshape是第一次接觸花了比較多時間去熟悉及學習，第十五週CoppeliaSim 模擬需要看老師的影片才會使用，但老師錄製的影片有時候會卡頓有些關鍵的地方無法知道怎麼操操作的。  \n \xa0 \n', 'tags': '', 'url': 'Progress Rate.html'}, {'title': 'w3筆記', 'text': '建立課程帳號及replit帳號 \n \n 透過\xa0\xa0 mdecad2022\xa0\xa0 的 organization 建立個人可以管理的倉儲 (site-Github_帳號) \xa0 \n 利用\xa0\xa0 replit 帳號所啟動的動態網站進行內容管理 \xa0 \n 動態轉為靜態網站內容之後,\xa0\xa0 要設法與 Github 倉儲同步. \xa0 \n \n \xa0 \n 之後申請帳號都使用 @nfu\xa0\xa0 電子郵箱 \xa0 \n \xa0 \n 修補課程網站安全疑慮: \xa0 \n \xa0 \n 目的:\xa0\xa0 不想讓 config/config 帶有編碼後的管理者密碼 \xa0 \n \xa0 \n 執行步驟: \xa0 \n \xa0 \n \n 必須先在個人的 mdecad2022/site-github_帳號\xa0 倉儲進行處理 \xa0 \n 第一步就是刪除 config/config 設定檔案 \xa0 \n 修改 .gitignore 成為:\xa0\xa0 \xa0 https://raw.githubusercontent.com/mdecad2022/site-41023242/main/.gitignore \xa0 \xa0 \n 加入 main.py:\xa0\xa0 \xa0 https://raw.githubusercontent.com/mdecad2022/site-41023242/main/main.py \xa0 \xa0 \n 在倉儲根目錄加入\xa0\xa0 nocache.py, 內容如:\xa0\xa0 \xa0 https://github.com/mdecycu/cmsimde/blob/2a41b26b6d9b1446a8b448bb6fb58a6dbb41c867/nocache.py \xa0 \xa0 \n \n \xa0 \n 之後再設法以\xa0\xa0 import 方式, 利用個人課程倉儲內容在\xa0 replit 建立\xa0 Repl 專案. \xa0 \n \xa0 \n 至於\xa0 Repl 專案, 必須在 Shell, 執行下列兩則指令: git submodule update --init --recursive \xa0 \xa0 \xa0 \n \xa0 \n 在倉儲根目錄執行\xa0\xa0\xa0 \xa0 \n 表示要取下所有子模組的內容 \xa0 \n \xa0 \n 並且安裝啟動\xa0 cmsimde\xa0 所需要的\xa0 Python 模組:\xa0\xa0 \xa0 \n \xa0 \n \xa0\xa0\xa0 pip install\xa0\xa0 \xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n \xa0 \n Replit 專案上的靜態內容同步至原始課程倉儲教學影片 \xa0 \n \xa0 \n 2b 開始在\xa0 \xa0 https://exam.cycu.org \xa0\xa0 \xa0 建立考試帳號. \xa0 \n \xa0 \n ----------------------------------------------- \xa0 \n 2a \xa0 \n 雲端版 \xa0 \n 登入 github (靜態網站) \xa0 \n 登入 replit (雲端動態網站) \xa0 \n 登入 \xa0 https://mail.nfu.edu.tw \xa0 (學號@nfu.edu.tw) \xa0 \n 登入 Onedrive (需要 5TB 儲存資料, Teams 與 Meet 上課) \xa0 \n 登入 Onshape (可以在平板與手機上繪製或檢視零組件) \xa0 \n ----- \xa0 \n 近端版 \xa0 \n Siemens NX 2027 (高階 MCAD) \xa0 \n Solvespace (有原始碼的參數式繪圖軟體) \xa0 \n CoppeliaSim \xa0 \n 可攜 Python \xa0 \n 可攜 MSYS1 \xa0 \n PC, Notebook   \n', 'tags': '', 'url': 'w3筆記.html'}, {'title': 'W4筆記', 'text': '電腦輔助設計室WIFI連線 \n SSID: 810WIFI \xa0 \n 密碼: 056315360 \xa0 \n \xa0 \n 通訊協定: Wi-Fi 4 (802.11n) \xa0 \n 安全性類型: WPA2-Personal \xa0 \n 網路頻帶: 2.4 GHz \xa0 \n 網路通道: 9 \xa0 \n 連結速度 (接收/傳輸): 72/72 (Mbps) \xa0 \n IPv6 位址:\u202f \xa0 \n 連結-本機 IPv6 位址:\u202f \xa0 \n IPv6 DNS 伺服器:\u202f \xa0 \n IPv4 位址:\u202f \xa0 \n IPv4 DNS 伺服器:\u202f \xa0 \n 製造商: Realtek Semiconductor Corp. \xa0 \n 描述: Realtek RTL8188EU Wireless LAN 802.11n USB 2.0 Network Adapter \xa0 \n 驅動程式版本: 1030.38.712.2019 \xa0 \n 實體位址 (MAC): C4-6E-1F-10-C4-47 \xa0 \n \xa0 \n 第四週上課筆記 \xa0 \n \xa0 \xa0 \n 在 Replit 執行動態網站: \xa0 \n 必須進入 Shell, 在倉儲根目錄執行下列兩則指令 (取下子模組內容, 並安裝執行所需模組). \xa0 \n git submodule update --init --recursive \xa0 \n pip install\xa0\xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n \xa0 \n 考試主機:\u202f \xa0 https://exam.cycu.org \u202f \xa0 \n \xa0 \n 每一位學員已經學會利用雲端與近端工具維護個人倉儲與網頁 \xa0 \n \xa0 \n 近端工具: 下載\xa0\xa0 \xa0 portable_python_3.10.6.7z \xa0 \n \xa0\xa0\xa0 Portablegit \xa0 \n 雲端工具: Replit \xa0 \n Web 分散式版次管理:\xa0 \xa0 https://github.com \xa0 \xa0 \n \xa0 \n 電腦輔助繪圖工具:\xa0 \xa0 \n \xa0\xa0\xa0 近端 NX2027 與 Solvespace \xa0 \n \xa0\xa0\xa0 雲端: \xa0 https://onshape.com \xa0 \xa0 \n \xa0 \n Notebook 權限設定 - 在瀏覽器中開啟 - 右上方 Share – Manage Access \xa0 \n _________________________________ \xa0 \n \xa0 \n 登入 Github \xa0 \n \xa0 \n 登入 Replit \xa0 \n \xa0 \n 登入 Onedrive ,\xa0 \xa0 \n \xa0 \n 遠端使用外部網路, 必須設定 140.130.17.4 port 3128 代理主機, 帳密都為: kmolab \xa0 \n \xa0 \n https://exam.cycu.org \xa0 \xa0 \n', 'tags': '', 'url': 'W4筆記.html'}, {'title': 'W5筆記', 'text': '透過 stud.cycu.org 執行動態網站  \n \n (登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh\xa0 cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \xa0 \n 請到 excel 檔案\xa0 查詢 \xa0stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號 \xa0 \n (透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp\xa0 帳號@stud.cycu.org \xa0\xa0\xa0 輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \xa0 \n 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \xa0 \n 利用 sftp\xa0 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以 git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 設定供 https 連線使用的代理主機, 並且以\xa0 git config --global\xa0 user.name 以及\xa0 git config --global\xa0 user.email 設定提交用的身分註記. \xa0 \n 在 stud.cycu.org 中, 以 git clone --recurse-submodules\xa0\xa0 git@github.com:mdecad2022/site-個人github帳號.git \xa0\xa0 取下個人倉儲. \xa0 \n 假如先前使用\xa0 git clone 並沒有取下\xa0 cmsimde 子模組內容, 只要在設定 https 代理主機後, 進入倉儲根目錄執行\xa0 git submodule update --init\xa0 --recursive\xa0 即可取下子模組內容. \xa0 \n 接著下載\xa0 server.py , 在 Windows 編輯\xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站. \xa0 \n 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站),\xa0 https://stud.cycu.org:8xxxx \xa0\xa0 看到個人的動態網站. \xa0 \n 動態網站改版後, 轉為靜態, 必須透過 source\xa0 acp \xa0以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性). \xa0 \n 執行 source acp\xa0 "提交字串" 之前必須要 git config\xa0 --global user.name,\xa0 git config\xa0 --global user.email,\xa0 git config\xa0 --global http.proxy \xa0 \n 上述採用指令模式對\xa0 server sftp 也可以利用\xa0\xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n \n \xa0 \n \xa0 \n config under .ssh 目錄: \xa0 \n Host 就是 .ssh/config 設定的對應 session 名稱, 此處若 Host 設為 demo, 則 SSH 對應的 .git/config 中的 URL 就必須使用 \xa0 git@demo:mdecad2022/site-scrum-1.git, \xa0 demo 就是 Host, Port 則是隨後的 %p 也就 SSH 協定內定的 port 22, %h 則是 Hostname, 也就是 github.com \xa0 \n \n \n \n \n 1 \xa0 \n 2 \xa0 \n 3 \xa0 \n 4 \xa0 \n \n \n Host demo \xa0 \n User git \xa0 \n Hostname github.com \xa0 \n ProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p \xa0 \n \n \n \n \n \xa0 \n --------------------------------------- \xa0 \n 2a 在一台遠端 server, 執行個人倉儲的動態網頁. \xa0 \n \xa0 \n \n Login to \xa0 https://mail.nfu.edu.tw \xa0 -\xa0 查看登入 stud.cycu.org 伺服器的帳號密碼, 帳號為 cad+學號, 密碼為四個字元, 包括數字與小寫英文字母 \xa0 \n 請到 excel 檔案 \xa0 查詢 \xa0 stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的 port) 與遠端 (給 stud.cycu.org, 8 開頭的 port) 埠號 \xa0 \n 修改可攜 Python 3.10.6 start.bat, 蓋掉第三行後重新啟動, 目的希望將操作系統的命令搜尋路徑放在可攜目錄搜尋路徑之後. \xa0 \n 重新啟動可攜程式環境, 在其中一個命令列, ssh\xa0 \xa0 cad+學號@stud.cycu.org , 表示要使用 secure shell 遠端登入到 stud.cycu.org, 這是一台 Linux 主機, 安裝 Ubuntu 22.04 Server.(若使用的網路連線協定並無 IPv6,\xa0 可將系統的 proxy 設為 140.130.17.4:3128 kmolab/kmolab) \xa0 \n 在 ssh 登入畫面, 以 ssh-keygen 建立 key pairs, .ssh/id_rsa 為 private key, id_rsa.pub 為 public key \xa0 \n 設法利用 Filezilla, 以 sftp 安全的(Secure)檔案(File)傳輸(Transmission)協定(Protocol), 與 stud.cycu.org 伺服器連結. \xa0 \n 利用\xa0 Filezilla sftp 取下 id_rsa.pub, 登錄至 Github 帳號下的 Setting - >\xa0 SSH and GPG keys. \xa0 \n 對\xa0 server sftp 也可以利用\xa0 \xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n 接下來要下載\xa0 \xa0 config \xa0 設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 接下來要在\xa0 Ubuntu (也就是 stud.cycu.org 這台主機所安裝的操作系統) 中, 設定 .gitconfig, 總共包含三項設定: git config --global user.name "scrum-1", git config --global user.email\xa0 "scrum1@mde.tw"\xa0\xa0 以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設定必須在 ssh 登入畫面中執行, 設定完成檔案會存入帳號根目錄中的 .gitconfig \xa0 \n 利用\xa0 git clone --recurse-submodules\xa0 \xa0 git@demo:mdecad2022/site-scrum-1.git \xa0 demo \xa0 \n 接著下載 \xa0 server.py , 在 Windows 編輯 \xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 登入\xa0 Ubuntu 後, 會使用的指令: pwd 代表 print working directory, clear -\xa0 清除螢幕, cd - 更換目錄, ls -l 列出目錄詳細內容, chmod u+x \xa0 acp \xa0 表示讓 user 可以 execute acp script (能夠讓使用者以 source acp 加上提交字串進行 git add, git commit, git push, 如何在 Windows 執行 acp.bat 加上提交字串. \xa0 \n \n \xa0 \n', 'tags': '', 'url': 'W5筆記.html'}, {'title': 'W6筆記', 'text': '在 stud.cycu.org 執行動態網站  \n git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 \n \xa0 \xa0 \n git config --global user.name "name" \xa0 \n \xa0 \xa0 \n git config --global user.email "email" \xa0 \n \xa0 \xa0 \n git clone --recurse-submodules git@demo:mdecad2022/site-github_帳號.git s \xa0 \n \xa0 \xa0 \n git submodule update --init --recursive \xa0 \n \xa0 \xa0 \n python3 server.py \xa0 \n \xa0 \xa0 \n https://stud.cycu.org:8xxx \xa0 \n \xa0 \xa0 \n acp 放入倉儲後 \xa0 \n \xa0 \xa0 \n chmod u+x acp\xa0 \xa0 \n \xa0 \xa0 \n source acp "提交說明字串" \xa0 \n \xa0 \xa0 \n python3 server.py & \xa0 \n \xa0 \xa0 \n ps aux | grep "server.py" \xa0 \n \xa0 \xa0 \n kill -9 111919 \xa0 \n \xa0 \xa0 \n cd s, cd cmsimde, git pull origin master \xa0 \n \xa0 \xa0 \n cd .., python3 server.py \xa0 \n \xa0 \xa0 \n exit 推出 login \xa0 \n \xa0 \n To fix the cmsimde bug on edit during https mode: \xa0 \n Need to cd cmsimde and do "git pull origin master" to update the cmsimde submodule files. \xa0 \n \xa0 \n After that, go back to the repository root directory to execute python3 server.py & to start the dynamic site. \xa0 \n \xa0   \n', 'tags': '', 'url': 'W6筆記.html'}, {'title': 'w12筆記', 'text': '\n \n 2022 Fall 電腦輔助設計與實習到底在教甚麼? \n \n \n \n \n 電腦輔助設計包含電腦、輔助與設計等三個要素, 電腦包含軟體、硬體與介於兩者中間的所謂韌體 ( Firmware ), 而所謂"輔助" (Aided) 則指從旁協助, 最後的設計 (Design), 則泛指將使用者的需求, 依據設計者的安排與確認流程, 逐一從虛 (模擬) 邁向實體 (實現). \n 從 Firmware 出現的動機與背景: \n \n As computers began to increase in  complexity , it became clear that various programs needed to first be initiated and run to provide a consistent environment necessary for running more complex programs at the user\'s discretion. This required programming the computer to run those programs  automatically . Furthermore, as companies, universities, and marketers wanted to sell computers to  laypeople  with little technical knowledge, greater automation became necessary to allow a lay-user to easily run programs for practical purposes. This gave rise to a kind of software that  a user would not consciously run , and it led to software that  a lay user wouldn\'t even know about . \n \n 共有幾個關鍵字詞, 其中包括 complexity, automatically, laypeople, a user would not consciously run, 以及最後的 a lay user wouldn\'t even know about. \n 這段文字說明韌體 (Firmware) 的出現可以歸納出下列動機與原因: \n \n 電腦的發展越來越複雜之後, 透過軟體、電腦硬體及網路環境溝通的事項變得越來越多且精細. \n 使得這些硬體元件、使用環境辨識與啟動相關設定, 改由功能更強且自動執行的韌體程式進行處理. \n 此外, 為了推廣讓更多較無專業知識的普通人使用電腦. \n 於是介於電腦軟體、電腦硬體及網路環境間, 儘量不讓使用者察覺韌體的存在. \n 但為了提升電腦的使用效能, 這些精密配置且自動執行的韌體程式卻越來越多. \n 最後, 一般人 (也就是較無專業知識的普通人) 在使用電腦時, 根本就不知道電腦的運行過程中, 有所謂韌體的存在. \n \n 假如我們將上述文句使用者操作的"電腦"換成" 現代產品設計與開發流程套件 ", 而將"韌體"換成" 數學理論、資料結構與演算法 ", 就成為: \n \n "現代產品設計與開發流程套件"的發展越來越複雜之後, 透過軟體、電腦硬體及網路環境溝通的事項變得越來越多且精細. \n 使得這些硬體元件、使用環境辨識與啟動相關設定, 改由功能更強且自動執行的"數學理論、資料結構與演算法"程式進行處理. \n 此外, 為了推廣讓更多較無專業知識的普通人使用"現代產品設計與開發流程套件". \n 於是介於電腦軟體、電腦硬體及網路環境間, 儘量不讓使用者察覺"數學理論、資料結構與演算法"的存在. \n 但為了提升"現代產品設計與開發流程套件"的使用效能, 這些精密配置且自動執行的"數學理論、資料結構與演算法"程式卻越來越多. \n 最後, 一般人 (也就是較無專業知識的普通人) 在使用"現代產品設計與開發流程套件"時, 根本就不知道電腦的運行過程中, 有所謂"數學理論、資料結構與演算法"的存在. \n \n 假如再將" 數學理論、資料結構與演算法 "泛指為 Theory、Structure and Algorithm, 也就是"原理、架構與邏輯"則有關電腦輔助設計課程內容在大學課程的安排就可以分為"不需要了解電腦輔助設計套件原理、架構與邏輯"的操作者, 以及"需要了解電腦輔助設計套件原理、架構與邏輯"的操作與開發者. \n 2022 Fall 電腦輔助設計與實習課程就是在訓練與培養" 需要了解電腦輔助設計套件原理、架構與邏輯 "的操作與開發者. \n 三十年前只要會操作電腦, 就一定會有工作. \n 二十年前只要會繪製 2D 產品設計工程圖, 就一定會有工作. \n 十年前只要會繪製 3D 產品設計工程圖, 就一定會有工作. \n 現在只要會操作 CAD/CAE/CAM 電腦套件, 就一定會有工作. \n 十年後......三十歲......, 就一定會有工作. \n 二十年後......四十歲......, 就一定會有工作. \n 三十年後......五十歲......, 就一定會有工作. \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12筆記.html'}, {'title': 'HW', 'text': '課程作業 \n', 'tags': '', 'url': 'HW.html'}, {'title': 'W6', 'text': '(1)零件一NX練習 零件檔  :   model.prt \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (2)零件二NX練習\xa0零件檔  :   mode2.prt \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n (3)零件一及零件二組合件NX練習 組合檔  :   assembly.prt \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n (4)零件三NX練習 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (5)零件三進階NX練習\xa0零件檔  :   mode4.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (5)零件四NX練習\xa0零件檔  :   table_support.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n ========================================================================================== \n \n (1)鑽床零件 6203RS Bearing NX練習 零件檔  :\xa0 6203RS Bearing.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (2)鑽床零件 Ball bearing _ODC32-IDC12 NX練習 零件檔  :  Ball bearing _ODC32-IDC12.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (3)鑽床零件 Base clamp NX練習 零件檔  :\xa0 Base clamp.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (4)鑽床零件 Base NX練習 零件檔  :\xa0 Base.prt \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (5)鑽床零件 Bolt_1 NX練習 零件檔  :\xa0 Bolt_1.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (6)鑽床零件 Bolt NX練習 零件檔  :\xa0 Bolt.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (7)鑽床零件 Bottom safety guard NX練習 零件檔  :  Bottom safety guard.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n (8)鑽床零件 Clamp NX練習 零件檔  :\xa0 Clamp.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (9)鑽床零件 Column NX練習 零件檔  :\xa0 Column.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n (10)鑽床零件 Drill chuck _B16 0.5-13mm NX練習 零件檔  :\xa0 Drill chuck _B16 0.5-13mm.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n \n (11)鑽床零件 Driven pulley NX練習 零件檔  :\xa0 Driven pulley.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (12)鑽床零件 Part 1 NX練習 零件檔  :\xa0 Part 1.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (13)鑽床零件 Base subassy L1G NX練習 組合件檔  :\xa0 Base subassy L1G.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (14)鑽床零件 Knob axle NX練習 零件檔  :\xa0 Knob axle.prt \xa0 \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (15)鑽床零件 Feed handle axle NX練習 零件檔  :\xa0 Feed handle axle.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (16)鑽床零件 Rubber knob NX練習 零件檔  :\xa0 Rubber knob.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n (17)鑽床零件 Feed handle subassy L1G NX練習 組合件檔  :\xa0 Feed handle subassy L1G.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (18)鑽床零件 Table clamp NX練習 零件檔  :\xa0 Table clamp.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n (19)鑽床零件 Table NX練習 零件檔  :\xa0 Table.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (20)鑽床零件 Table subassy L1G NX練習 組合件檔  :\xa0 Table subassy L1G.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (21)鑽床零件 Rubber gasket NX練習 零件檔  :\xa0 Rubber gasket.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (22)鑽床零件 Spindle NX練習 零件檔  :\xa0 Spindle.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (23)鑽床零件 Spindle guide NX練習 零件檔  :\xa0 Spindle guide.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (24)鑽床零件 Spindle subassy L1G NX練習 組合件檔  :\xa0 Spindle subassy L1G.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (25)鑽床零件 Part 1_1 NX練習 零件檔  :\xa0 Part 1_1.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (26)鑽床零件 Spline guider NX練習 零件檔  :\xa0 Spline guider.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n (27)鑽床零件 Spindle spline guider L1G NX練習 組合件檔  :\xa0 Spindle spline guider L1G.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (28)鑽床零件 Top safety guard NX練習 零件檔  :\xa0 Top safety guard.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (29)鑽床零件 Safety guard subassy L1G NX練習 組合件檔  :\xa0 Safety guard subassy L1G.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (30)鑽床零件 Spindle lock screw and nut NX練習 零件檔  :\xa0 Spindle lock screw and nut.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (31)鑽床零件 Pulley NX練習 零件檔  :\xa0 Pulley.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n (32)鑽床零件 Start Stop NX練習 零件檔  :\xa0 Start Stop.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (33)鑽床零件 Spring cap NX練習 零件檔  :\xa0 Spring cap.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (34)鑽床零件 Spring nut NX練習 零件檔  :\xa0 Spring nut.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (35)鑽床零件 Motor tensioner clamp NX練習 零件檔  :\xa0 Motor tensioner clamp.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (36)鑽床零件 Motor tensioner NX練習 零件檔  :  Motor tensioner.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (37)鑽床零件 Head NX練習 零件檔  :\xa0 Head.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (38)鑽床零件 Head subassy L1G NX練習 組合件檔  :\xa0 Head subassy L1G.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (39)鑽床零件 Motor NX練習 零件檔  :\xa0 Motor.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n (40)鑽床零件 Motor subassy L1G NX練習 組合件檔  :\xa0 Motor subassy L1G.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n (41)鑽床本體 Drill press - Ferm FTB-13M NX練習 組合件檔  :\xa0 Drill press - Ferm FTB-13M-41023119.prt \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n 鑽床本體壓縮檔 :\xa0 NX鑽床零件.7z \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W8', 'text': '課程截圖 \n 下載 NX2027.3401_lite 及 solvespace 3.1 ，開啟 drill press零組件檔案及 onshape網站 \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'w10', 'text': '已知  block.prt  中 p8=59, p9=44, 請利用網際表單, 將 p8, p9 都改為 50 之後, 在瀏覽中提供新的 block_new.prt 檔案下載, 並直接在網頁上展示該零件的 STL 格式檔案. \n 檔案 :  block_41023119.stl \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w12', 'text': '課程題庫 \n 2ag1-w2.xml  (有關CAD第二週題庫) \n 2ag1-w4-w5.xml  (有關CAD第四及五週題庫) \n 2ag1-w6.xml  (有關CAD第六週題庫) \n 2ag1-w8.xml  (有關CAD第八週題庫) \n 2ag1-w10.xml  (有關CAD第十週題庫) \n 出題人 :  41023119', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': 'Solvespace 編譯繪圖與應用 題目練習 \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 將 Solvespace 組立件以 STL 格式匯出後轉入 Coppeliasim在各旋轉軸接處加上 Revolute joint 後, 令各軸以每秒 10 度的速度運轉\n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': 'w14-w18考試題目 \n', 'tags': '', 'url': 'w14.html'}, {'title': 'Solvespace', 'text': '壓縮檔 :  two link robot.7z \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'NX', 'text': '壓縮檔 :  one link robot.7z \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n', 'tags': '', 'url': 'NX.html'}, {'title': 'Onshape', 'text': 'Base_url :  https://cad.onshape.com/documents/87331c2ed18326670b8a6786/w/1539c8dddaebaa431600c411/e/29a89e7716aeaeaa31292e98?renderMode=0&uiState=63b7b7e55e62ba1d692c8ad8 \n Shaft_url :  https://cad.onshape.com/documents/9b37d37f6b3d9d5e29f692bc/w/dcb561186cc6450e547804a4/e/0ef144313a38adf81021d7ca?renderMode=0&uiState=63b7b80fbc31097010e649d6 \n Link_url :  https://cad.onshape.com/documents/34093014336aa3b748ef29f8/w/b77d5f67d08e17a95dd4e978/e/eb5dc3cf2e08bf801dddadc8 \n CoppeliaSimEdu模擬影片youtube連結 :  https://youtu.be/RZdnQCz2vwM \n \n \n 將 Solvespace 組立件以 STL 格式匯出後轉入 Coppeliasim在各旋轉軸接處加上 Revolute joint 後, 令各軸以每秒 10 度的速度運轉\n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'w15', 'text': 'link 檔案 :  new link \n \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n two_link_assembly 檔案 :  two_link_assembly.slvs \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 將 Solvespace 組立件以 STL 格式匯出後轉入 Coppeliasim在各旋轉軸接處加上 Revolute joint 後, 令各軸以每秒 10 度的速度運轉 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n youtube影片連結 : h ttps://www.youtube.com/watch?v=RZdnQCz2vwM \n \n', 'tags': '', 'url': 'w15.html'}, {'title': '使 python 能在 CoppeliaSim 上執行', 'text': '\n', 'tags': '', 'url': '使 python 能在 CoppeliaSim 上執行.html'}, {'title': 'w16', 'text': '根據\xa0 https://www.youtube.com/shorts/08TMJ_lJdZU \xa0以及\xa0 https://www.youtube.com/watch?v=Jn8nxSZdF_c \xa0中的機構設計, 以 Coppeliasim 4.3.0 rev 12 完成一個彈珠台遊戲系統, 使用者可透過鍵盤操作送球與挑球動作進行遊戲, 期間並可透過感測器依據碰撞與彈射位置計算得分. \n 參考資料: cad2022_final_hw_ref.7z \n 彈珠檯檔案； pinball.prt \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n 後來發現 NX 轉出來的 STL 檔丟到 CoppeliaSim 中會出錯，所以重畫一個 \n \n pinball base url :  https://cad.onshape.com/documents/90f4797c7774812782974c11/w/f6dc0fce4ead962c68580608/e/daec613ec286958627edd3fb?renderMode=0&uiState=63bd619ba320c41a58d2db59 \n \n pinball slider url :  https://cad.onshape.com/documents/a4e0e11b3dc14fbbcfa44d09/w/d1606b1ffbf0bc09ebef7db0/e/ca072bcaafaf9b3e9d472f72?renderMode=0&uiState=63bd61dca320c41a58d2db65 \n \n pinball shaft url :  https://cad.onshape.com/documents/8892d2d0d2679fc6b3d9e8a8/w/7cda02d87d9d97831e5b3e63/e/4b87dcce5f4348ffb7ecf175?renderMode=0&uiState=63bd6207a320c41a58d2db91 \n \n pinball ball url :  https://cad.onshape.com/documents/8c20635e6c01542b4fdd0d60/w/3b53a965f5f0a0c6a828b8e1/e/c68acf21b5fa7941802c9e47?renderMode=0&uiState=63bd622c5e62ba1d6936a8eb \n \n pinball assembly url :  https://cad.onshape.com/documents/5cbb8682fb8a45273ce2d5cd/w/571c8f065fdb7ac8c0c2178e/e/67c1531542b025e89d893971?renderMode=0&uiState=63bd6272bc31097010f018dd \n \n 彈珠檯繪製過程 wink \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n 將 STL 檔轉入 CoppeliaSim 過程wink \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n youtube連結 :  https://www.youtube.com/watch?v=eK2gfvU7-ug \n', 'tags': '', 'url': 'w16.html'}, {'title': 'upload image', 'text': '上傳圖片過程wink \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'upload image.html'}, {'title': 'upload wink video', 'text': '上傳wink影片過程 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n <script>// <![CDATA[ var winkVideoData_w1_1 = { \xa0 dataVersion: 1, \xa0 frameRate: 10, \xa0 buttonFrameLength: 5, \xa0 buttonFrameOffset: 2, \xa0 frameStops: { \xa0 }, }; // ]]></script> <!-- 接下來將 mp4 檔案從 downloads 目錄取出 --> <div class="winkVideoContainerClass"><video width="800" height="600" autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="/cmsimde/static" data-varname="winkVideoData_w1_1" muted="true"> <source src="./../downloads/wink/upload wink.mp4" type="video/mp4" /></video></div> \n', 'tags': '', 'url': 'upload wink video.html'}]};