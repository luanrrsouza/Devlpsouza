import * as React from "react";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
  whatsapp?: string;
};

export default function ContactEmail({
  name,
  email,
  message,
  whatsapp,
}: ContactEmailProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Novo contato: Devlpsouza</title>
      </head>
      <body
        style={{
          fontFamily:
            "Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          backgroundColor: "#f7f7f7",
          padding: "24px",
        }}
      >
        <table
          role="presentation"
          cellPadding={0}
          cellSpacing={0}
          width="100%"
          style={{
            maxWidth: 640,
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: 24 }}>
                <h1 style={{ margin: 0, fontSize: 20 }}>
                  Novo contato: Devlpsouza
                </h1>
                <p style={{ marginTop: 8, color: "#6b7280" }}>
                  Resumo do contato recebido pelo site.
                </p>

                <div style={{ marginTop: 24 }}>
                  <table
                    role="presentation"
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    style={{ borderCollapse: "separate", borderSpacing: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            fontSize: 12,
                            color: "#6b7280",
                            width: 120,
                            padding: "0 0 8px",
                          }}
                        >
                          Nome
                        </td>
                        <td style={{ fontSize: 14, padding: "0 0 8px" }}>
                          {name}
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: 12,
                            color: "#6b7280",
                            padding: "0 0 8px",
                          }}
                        >
                          E-mail
                        </td>
                        <td style={{ fontSize: 14, padding: "0 0 8px" }}>
                          {email}
                        </td>
                      </tr>
                      {whatsapp ? (
                        <tr>
                          <td
                            style={{
                              fontSize: 12,
                              color: "#6b7280",
                              padding: "0 0 8px",
                            }}
                          >
                            WhatsApp
                          </td>
                          <td style={{ fontSize: 14, padding: "0 0 8px" }}>
                            {whatsapp}
                          </td>
                        </tr>
                      ) : null}
                      <tr>
                        <td
                          style={{
                            fontSize: 12,
                            color: "#6b7280",
                            verticalAlign: "top",
                            paddingTop: 8,
                          }}
                        >
                          Mensagem
                        </td>
                        <td
                          style={{
                            fontSize: 14,
                            whiteSpace: "pre-wrap",
                            paddingTop: 8,
                          }}
                        >
                          {message}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <hr
                  style={{
                    marginTop: 24,
                    border: 0,
                    height: 1,
                    backgroundColor: "#e5e7eb",
                  }}
                />
                <p style={{ marginTop: 12, fontSize: 12, color: "#9ca3af" }}>
                  Enviado automaticamente pelo formulário do portfólio
                  Devlpsouza.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
