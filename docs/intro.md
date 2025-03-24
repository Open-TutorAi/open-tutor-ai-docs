---
sidebar_position: 1
---

# Open TutorAI 👋

![GitHub stars](https://img.shields.io/github/stars/pr-elhajji/open-tutor-ai-CE?style=social)
![GitHub forks](https://img.shields.io/github/forks/pr-elhajji/open-tutor-ai-CE?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/pr-elhajji/open-tutor-ai-CE?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/pr-elhajji/open-tutor-ai-CE)
![GitHub language count](https://img.shields.io/github/languages/count/pr-elhajji/open-tutor-ai-CE)
![GitHub top language](https://img.shields.io/github/languages/top/pr-elhajji/open-tutor-ai-CE)
![GitHub last commit](https://img.shields.io/github/last-commit/pr-elhajji/open-tutor-ai-CE)
[![Discord](https://img.shields.io/badge/Discord-Open_TutorAI-blue?logo=discord&logoColor=white)](https://discord.gg/z5fMfrBzEF)



**OpenTutorAI-CE** (Community Edition) is an open-source project designed to provide an educational and collaborative AI-powered platform. This public edition is the foundation for a proprietary Enterprise Edition (EE) and is built to encourage community contributions.

:::tip
  **Looking for an [Enterprise Plan](https://docs.opentutorai.com/enterprise)?** – **[Speak with Our Sales Team Today!](mailto:sales@oepntutorai.com)**

  Get **enhanced capabilities**, including **custom theming and branding**, **Service Level Agreement (SLA) support**, **Long-Term Support (LTS) versions**, and **more!**
:::


## Key Features of Open TutorAI ⭐

- 🚀 **Effortless Setup**: Install seamlessly using Docker or Kubernetes (kubectl, kustomize or helm) for a hassle-free experience with support for both `:ollama` and `:cuda` tagged images.

- 🤝 **Ollama/OpenAI API Integration**: Effortlessly integrate OpenAI-compatible APIs for versatile conversations alongside Ollama models. Customize the OpenAI API URL to link with **LMStudio, GroqCloud, Mistral, OpenRouter, and more**.

- 🛡️ **Granular Permissions and User Groups**: By allowing administrators to create detailed user roles and permissions, we ensure a secure user environment. This granularity not only enhances security but also allows for customized user experiences, fostering a sense of ownership and responsibility amongst users.

- 📱 **Responsive Design**: Enjoy a seamless experience across Desktop PC, Laptop, and Mobile devices.

- 📱 **Progressive Web App (PWA) for Mobile**: Enjoy a native app-like experience on your mobile device with our PWA, providing offline access on localhost and a seamless user interface.

- ✒️🔢 **Full Markdown and LaTeX Support**: Elevate your LLM experience with comprehensive Markdown and LaTeX capabilities for enriched interaction.

- 🎤📹 **Hands-Free Voice/Video Call**: Experience seamless communication with integrated hands-free voice and video call features, allowing for a more dynamic and interactive chat environment.

- 🛠️ **Model Builder**: Easily create Ollama models via the Web UI. Create and add custom characters/agents, customize chat elements, and import models effortlessly through [Open TutorAI Community](https://oepntutorai.com.com/) integration.

- 🐍 **Native Python Function Calling Tool**: Enhance your LLMs with built-in code editor support in the tools workspace. Bring Your Own Function (BYOF) by simply adding your pure Python functions, enabling seamless integration with LLMs.

- 📚 **Local RAG Integration**: Dive into the future of chat interactions with groundbreaking Retrieval Augmented Generation (RAG) support. This feature seamlessly integrates document interactions into your chat experience. You can load documents directly into the chat or add files to your document library, effortlessly accessing them using the `#` command before a query.

- 🔍 **Web Search for RAG**: Perform web searches using providers like `SearXNG`, `Google PSE`, `Brave Search`, `serpstack`, `serper`, `Serply`, `DuckDuckGo`, `TavilySearch`, `SearchApi` and `Bing` and inject the results directly into your chat experience.

- 🌐 **Web Browsing Capability**: Seamlessly integrate websites into your chat experience using the `#` command followed by a URL. This feature allows you to incorporate web content directly into your conversations, enhancing the richness and depth of your interactions.

- 🎨 **Image Generation Integration**: Seamlessly incorporate image generation capabilities using options such as AUTOMATIC1111 API or ComfyUI (local), and OpenAI's DALL-E (external), enriching your chat experience with dynamic visual content.

- ⚙️ **Many Models Conversations**: Effortlessly engage with various models simultaneously, harnessing their unique strengths for optimal responses. Enhance your experience by leveraging a diverse set of models in parallel.

- 🔐 **Role-Based Access Control (RBAC)**: Ensure secure access with restricted permissions; only authorized individuals can access your Ollama, and exclusive model creation/pulling rights are reserved for administrators.

- 🌐🌍 **Multilingual Support**: Experience Open TutorAI in your preferred language with our internationalization (i18n) support. Join us in expanding our supported languages! We're actively seeking contributors!

- 🧩 **Pipelines, Open TutorAI Plugin Support**: Seamlessly integrate custom logic and Python libraries into Open TutorAI using [Pipelines Plugin Framework](https://github.com/open-tutorai/pipelines). Launch your Pipelines instance, set the OpenAI URL to the Pipelines URL, and explore endless possibilities. [Examples](https://github.com/open-tutorai/pipelines/tree/main/examples) include **Function Calling**, User **Rate Limiting** to control access, **Usage Monitoring** with tools like Langfuse, **Live Translation with LibreTranslate** for multilingual support, **Toxic Message Filtering** and much more.

- 🌟 **Continuous Updates**: We are committed to improving Open TutorAI with regular updates, fixes, and new features.

Want to learn more about Open TutorAI's features? Check out our [Open TutorAI documentation](https://opentutorai.github.io/OpenTutorAI/) for a comprehensive overview!

## 🔗 Also Check Out Open TutorAI Community!

Don't forget to explore our sibling project, [Open TutorAI Community](https://opentutorai.github.io/OpenTutorAI/), where you can discover, download, and explore customized Modelfiles. Open TutorAI Community offers a wide range of exciting possibilities for enhancing your chat interactions with Open TutorAI! 🚀

## How to Install 🚀

### Installation via Python pip 🐍

Open TutorAI can be installed using pip, the Python package installer. Before proceeding, ensure you're using **Python 3.11** to avoid compatibility issues.

1. **Install Open TutorAI**:
   Open your terminal and run the following command to install Open TutorAI:

   ```bash
   pip install open-tutorai
   ```

2. **Running Open TutorAI**:
   After installation, you can start Open TutorAI by executing:

   ```bash
   open-tutorai serve
   ```

This will start the Open TutorAI server, which you can access at [http://localhost:8080](http://localhost:8080)

### Quick Start with Docker 🐳

:::note  
 Please note that for certain Docker environments, additional configurations might be needed. If you encounter any connection issues, our detailed guide on [Open TutorAI Documentation](https://docs.########.com/) is ready to assist you.
 :::

:::warning
 When using Docker to install Open TutorAI, make sure to include the `-v open-tutorai:/app/backend/data` in your Docker command. This step is crucial as it ensures your database is properly mounted and prevents any loss of data.
 :::

:::tip
 If you wish to utilize Open TutorAI with Ollama included or CUDA acceleration, we recommend utilizing our official images tagged with either `:cuda` or `:ollama`. To enable CUDA, you must install the [Nvidia CUDA container toolkit](https://docs.nvidia.com/dgx/nvidia-container-runtime-upgrade/) on your Linux/WSL system.
 :::

### Installation with Default Configuration

- **If Ollama is on your computer**, use this command:

  ```bash
  docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-tutorai:/app/backend/data --name open-tutorai --restart always ghcr.io/open-tutorai/open-tutorai:main
  ```

- **If Ollama is on a Different Server**, use this command:

  To connect to Ollama on another server, change the `OLLAMA_BASE_URL` to the server's URL:

  ```bash
  docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=https://example.com -v open-tutorai:/app/backend/data --name open-tutorai --restart always ghcr.io/open-tutorai/open-tutorai:main
  ```

- **To run Open TutorAI with Nvidia GPU support**, use this command:

  ```bash
  docker run -d -p 3000:8080 --gpus all --add-host=host.docker.internal:host-gateway -v open-tutorai:/app/backend/data --name open-tutorai --restart always ghcr.io/open-tutorai/open-tutorai:cuda
  ```

### Installation for OpenAI API Usage Only

- **If you're only using OpenAI API**, use this command:

  ```bash
  docker run -d -p 3000:8080 -e OPENAI_API_KEY=your_secret_key -v open-tutorai:/app/backend/data --name open-tutorai --restart always ghcr.io/open-tutorai/open-tutorai:main
  ```

### Installing Open TutorAI with Bundled Ollama Support

This installation method uses a single container image that bundles Open TutorAI with Ollama, allowing for a streamlined setup via a single command. Choose the appropriate command based on your hardware setup:

- **With GPU Support**:
  Utilize GPU resources by running the following command:

  ```bash
  docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-tutorai:/app/backend/data --name open-tutorai --restart always ghcr.io/open-tutorai/open-tutorai:ollama
  ```

- **For CPU Only**:
  If you're not using a GPU, use this command instead:

  ```bash
  docker run -d -p 3000:8080 -v ollama:/root/.ollama -v open-tutorai:/app/backend/data --name open-tutorai --restart always ghcr.io/open-tutorai/open-tutorai:ollama
  ```

Both commands facilitate a built-in, hassle-free installation of both Open TutorAI and Ollama, ensuring that you can get everything up and running swiftly.

After installation, you can access Open TutorAI at [http://localhost:3000](http://localhost:3000). Enjoy! 😄

### Other Installation Methods

We offer various installation alternatives, including non-Docker native installation methods, Docker Compose, Kustomize, and Helm. Visit our [Open TutorAI Documentation](https://docs.########.com/getting-started/) or join our [Discord community](https://discord.gg/KJHC5PcT) for comprehensive guidance.

### Troubleshooting

Encountering connection issues? Our [Open TutorAI Documentation](https://opentutorai.com/docs/troubleshooting//) has got you covered. For further assistance and to join our vibrant community, visit the [Open TutorAI Discord](https://discord.gg/z5fMfrBzEF).

#### Open TutorAI: Server Connection Error

If you're experiencing connection issues, it’s often due to the TutorAI docker container not being able to reach the Ollama server at 127.0.0.1:11434 (host.docker.internal:11434) inside the container . Use the `--network=host` flag in your docker command to resolve this. Note that the port changes from 3000 to 8080, resulting in the link: `http://localhost:8080`.

**Example Docker Command**:

```bash
docker run -d --network=host -v open-tutorai:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-tutorai --restart always ghcr.io/open-tutorai/open-tutorai:main
```

### Keeping Your Docker Installation Up-to-Date

In case you want to update your local Docker installation to the latest version, you can do it with [Watchtower](https://containrrr.dev/watchtower/):

```bash
docker run --rm --volume /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --run-once open-tutorai
```

In the last part of the command, replace `open-tutorai` with your container name if it is different.

Check our Updating Guide available in our [Open TutorAI Documentation](https://docs.opentutorai.com/getting-started/updating).

### Using the Dev Branch 🌙

:::warning
 The `:dev` branch contains the latest unstable features and changes. Use it at your own risk as it may have bugs or incomplete features.
:::
If you want to try out the latest bleeding-edge features and are okay with occasional instability, you can use the `:dev` tag like this:

```bash
docker run -d -p 3000:8080 -v open-tutorai:/app/backend/data --name open-tutorai --add-host=host.docker.internal:host-gateway --restart always ghcr.io/open-tutorai/open-tutorai:dev
```

### Offline Mode

If you are running Open TutorAI in an offline environment, you can set the `HF_HUB_OFFLINE` environment variable to `1` to prevent attempts to download models from the internet.

```bash
export HF_HUB_OFFLINE=1
```

## What's Next? 🌟

Discover upcoming features on our roadmap in the [Open TutorAI Documentation](https://docs.opentutorai.com/roadmap/).

## License 📜

This project is licensed under the [BSD-3-Clause License](LICENSE) - see the [LICENSE](LICENSE) file for details. 📄

## Support 💬

If you have any questions, suggestions, or need assistance, please open an issue or join our
[Open TutorAI Discord community](https://discord.gg/z5fMfrBzEF) to connect with us! 🤝

## Star History

<a href="https://star-history.com/#open-tutorai/open-tutorai&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=open-tutorai/open-tutorai&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=open-tutorai/open-tutorai&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=open-tutorai/open-tutorai&type=Date" />
  </picture>
</a>

---

Let's make Open TutorAI even more amazing together! 💪
