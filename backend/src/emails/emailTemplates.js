export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to AlertX</title>
  <style>
    @media only screen and (max-width: 600px) {
      body {
        padding: 10px !important;
      }
      .container {
        padding: 20px !important;
      }
      .logo {
        width: 60px !important;
        height: 60px !important;
      }
      .button {
        display: block !important;
        width: 100% !important;
        padding: 14px 0 !important;
        font-size: 16px !important;
      }
      .content-box {
        padding: 20px !important;
      }
    }
  </style>
</head>
<body style="
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
">
  <div style="
    background: linear-gradient(to right, #ff511a, #ff7a4d);
    padding: 30px;
    text-align: center;
    border-radius: 12px 12px 0 0;
  ">
    <img
      src="https://raw.githubusercontent.com/EnriqueShanna3505/alertx-assets/main/image.png"
      alt="AlertX Logo"
      class="logo"
      style="
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        border-radius: 50%;
        background-color: white;
        padding: 10px;
      "
    />
    <div style="
      color: white;
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 10px;
    ">
      AlertX
    </div>
    <p style="color: white; margin: 0; font-size: 16px; opacity: 0.9">
      Your One Stop Workspace Monitoring AI
    </p>
  </div>

  <div class="container" style="
    background-color: #ffffff;
    padding: 35px;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  ">
    <p style="font-size: 18px; color: #ff511a;">
      <strong>Hello ${name},</strong>
    </p>
    <p>
      We're excited to welcome you to AlertX! Your AI-powered workspace
      monitoring solution for safety compliance and risk detection.
    </p>

    <div class="content-box" style="
      background-color: #fff5f2;
      padding: 25px;
      border-radius: 10px;
      margin: 25px 0;
      border-left: 4px solid #ff511a;
    ">
      <p style="font-size: 16px; margin: 0 0 15px 0; color: #ff511a">
        <strong>Get started with AlertX:</strong>
      </p>
      <ul style="padding-left: 20px; margin: 0;">
        <li style="margin-bottom: 10px">
          <strong>Connect Camera Feeds</strong> – PPE Non-compliance detections, forklift, and danger zone monitoring
        </li>
        <li style="margin-bottom: 10px">
          <strong>Detection Models</strong> – Standardized OSHA regulations
        </li>
        <li style="margin-bottom: 10px">
          <strong>Real-Time Alert Channels</strong> – Telegram for real-time violation notifications
        </li>
        <li>
          <strong>Review Dashboard</strong> – Monitor active violations and compliance analytics
        </li>
      </ul>
    </div>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${clientURL}" class="button" style="
        background: linear-gradient(to right, #ff511a, #ff7a4d);
        color: white;
        text-decoration: none;
        padding: 12px 30px;
        border-radius: 50px;
        font-weight: 500;
        display: inline-block;
      ">
        Launch AlertX Dashboard
      </a>
    </div>

    <p style="margin-bottom: 5px;">
      Our AI models will help you monitor PPE compliance, forklift blindspots, and danger zones while automatically referencing safety regulations.
    </p>
    <p style="margin-top: 0;">Stay safe and compliant!</p>

    <p style="margin-top: 25px; margin-bottom: 0;">
      Best regards,<br />The AlertX Team
    </p>
  </div>

  <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
    <p>© 2025 AlertX. All rights reserved.</p>
    <p style="text-align: center;">
  <a href="#" style="display: inline-block; color: #ff511a; text-decoration: none; margin: 0 8px; white-space: nowrap;">Privacy Policy</a>
  <a href="#" style="display: inline-block; color: #ff511a; text-decoration: none; margin: 0 8px; white-space: nowrap;">Terms of Service</a>
  <a href="#" style="display: inline-block; color: #ff511a; text-decoration: none; margin: 0 8px; white-space: nowrap;">Contact Us</a>
</p>

  </div>
</body>
</html>
  `;
}
