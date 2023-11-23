# Final_Project_chrome
製作 Chrome 擴充套件

step1 **建立擴充套件清單檔案（manifest file）：**
    - 在你的專案目錄中，建立一個名為 **`manifest.json`** 的檔案。這是擴充套件的配置文件，包含擴充套件的設定、權限和其他必要的資訊。
    
    jsonCopy code
    {
      "manifest_version": 2,
      "name": "我的擴充套件",
      "version": "1.0",
      "description": "這是一個示範擴充套件",
      "browser_action": {
        "default_popup": "popup.html",
        "default_icon": {
          "16": "images/icon16.png",
          "48": "images/icon48.png",
          "128": "images/icon128.png"
        }
      },
      "permissions": ["storage"]
    }
step2 **建立擴充套件內容：**
    - 在專案目錄中，建立一個名為 **`popup.html`** 的檔案，用來定義擴充套件的彈出視窗內容。
    
    htmlCopy code
    <!DOCTYPE html>
    <html>
    <head>
      <title>我的擴充套件</title>
    </head>
    <body>
      <h1>Hello, 擴充套件世界!</h1>
    </body>
    </html>
    
step3 **添加圖示：**
    - 在專案目錄中建立一個名為 **`images`** 的子目錄，放入不同大小的圖示，供擴充套件使用。
step4 **安裝擴充套件：**
    - 在 Chrome 瀏覽器中，打開 **`chrome://extensions/`**。
    - 啟用「開發者模式」。
    - 點擊「載入未封裝項目」，選擇你的擴充套件專案目錄。
step5 **測試：**
    - 你的擴充套件應該已經出現在 Chrome 瀏覽器的工具列中。
    - 點擊擴充套件圖示，應該會彈出彈出視窗，顯示 "Hello, 擴充套件世界!"。

### Python 轉 Java：

使用 Rapydscript 将 Python 代码转换为 JavaScript 并将其嵌入到 Chrome 扩展中的过程涉及以下步骤：

1. **安装 Rapydscript：**
    - 首先，确保你的系统上安装了 Python。然后，可以使用以下命令安装 Rapydscript：
        pip install rapydscript
        
        
2. **编写 Python 代码：**
    - 编写你的 Python 代码。这可能是你想要嵌入到 Chrome 扩展中的功能代码。保存这个文件，例如 **`myscript.py`**。
        
        pythonCopy code
        # myscript.py
        def hello():
            return "Hello from Python!"

        
3. **使用 Rapydscript 编译 Python 代码：**
    - 使用 Rapydscript 编译你的 Python 代码。运行以下命令：
        
        cssCopy code
        rapydscript -p -r myscript.py > myscript.js
    
        这将生成一个名为 **`myscript.js`** 的 JavaScript 文件。
        
4. **在 Chrome 扩展中使用 JavaScript 代码：**
    - 将生成的 JavaScript 文件（**`myscript.js`**）包含在你的 Chrome 扩展项目中。可以在扩展的 HTML 文件中使用 **`<script>`** 标签将它引入。

        htmlCopy code
        <!-- 在你的 HTML 文件中引入编译后的 JavaScript 文件 -->
        <script src="myscript.js"></script>
        
        
5. **在 JavaScript 代码中调用 Python 函数：**
    - 在你的 JavaScript 代码中，可以调用由 Python 代码生成的函数。例如，在你的 JavaScript 文件中：
        
        javascriptCopy code
        // 调用由 Python 生成的函数
        var result = hello();
        console.log(result);  // 输出：Hello from Python!

        
6. **将 Chrome 扩展加载到浏览器中：**
    - 在 Chrome 浏览器中加载你的扩展。在 Chrome 浏览器的地址栏中输入 **`chrome://extensions/`**，启用“开发者模式”，然后点击“加载已解压的扩展”，选择你的扩展文件夹。
