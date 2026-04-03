import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, projectType, message } = body;
  
  const config = useRuntimeConfig();

  // Si no hay API key, lanzamos un error claro
  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'RESEND_API_KEY is not configured in runtimeConfig'
    });
  }

  const resend = new Resend(config.resendApiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Architect Showcase <onboarding@resend.dev>',
      to: ['pedromorenotrenado@gmail.com'],
      subject: `New Project Inquiry: ${projectType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 40px; border-radius: 20px; border: 1px solid #333;">
          <h2 style="color: #3b82f6; font-size: 24px; margin-bottom: 24px; border-bottom: 1px solid #333; padding-bottom: 16px;">New Inquiry</h2>
          <p style="margin: 8px 0;"><strong style="color: #888;">Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong style="color: #888;">Email:</strong> ${email}</p>
          <p style="margin: 8px 0;"><strong style="color: #888;">Project Type:</strong> ${projectType}</p>
          <div style="margin-top: 24px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid #333;">
            <strong style="color: #888; display: block; margin-bottom: 8px;">Message:</strong>
            <p style="line-height: 1.6; margin: 0;">${message}</p>
          </div>
          <p style="font-size: 10px; color: #555; margin-top: 40px; text-align: center;">Sent from your Portfolio at <a href="https://pedromoreno.dev" style="color: #3b82f6; text-decoration: none;">pedromoreno.dev</a></p>
        </div>
      `
    });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error: any) {
    return createError({
      statusCode: 500,
      statusMessage: error.message || 'Error sending email',
      data: error
    });
  }
});
