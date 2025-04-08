import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => {
  const main = {
    backgroundColor: '#f5f5f5',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  };

  const container = {
    margin: '40px auto',
    padding: '40px 0',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    maxWidth: '600px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  };

  const section = {
    padding: '0 48px',
  };

  const heading = {
    color: '#111827',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 24px',
  };

  const text = {
    color: '#4b5563',
    fontSize: '16px',
    margin: '0 0 24px',
    lineHeight: '24px',
  };

  const messageBox = {
    backgroundColor: '#f8fafc',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    margin: '24px 0',
  };

  const divider = {
    borderTop: '1px solid #e5e7eb',
    margin: '32px 0',
  };

  const footer = {
    color: '#6b7280',
    fontSize: '14px',
    margin: '0',
    textAlign: 'center' as const,
  };

  return (
    <Html>
      <Head />
      <Preview>Nouvelle réservation de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={heading}>Nouvelle réservation</Heading>
            <Text style={text}>
              Une nouvelle réservation a été effectuée:
            </Text>

            <Text style={text}>
              <strong>Nom:</strong> {name}<br />
              <strong>Email:</strong> {email}
            </Text>

            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Section style={messageBox}>
              <Text style={text}>{message}</Text>
            </Section>
          </Section>

          <Hr style={divider} />

          <Section style={section}>
            <Text style={footer}>
              &copy; {new Date().getFullYear()} Wild Arena. This is an automated message.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;
