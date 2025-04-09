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
  Link,
} from '@react-email/components';
import * as React from 'react';

interface BookingConfirmationEmailProps {
  customerName: string;
  bookingNumber: string;
  bookingDetails: {
    service: string;
    date: string;
    time: string;
    period: string;
    players: number;
    price: string;
  };
}

export const BookingConfirmationEmail = ({
  customerName,
  bookingNumber,
  bookingDetails,
}: BookingConfirmationEmailProps) => {
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

  const logoSection = {
    padding: '0 48px 24px',
    textAlign: 'center' as const,
  };

  const logo = {
    color: '#111827',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0',
  };

  const heroSection = {
    padding: '32px 48px',
    textAlign: 'center' as const,
    backgroundColor: '#f8fafc',
  };

  const heroTitle = {
    color: '#111827',
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '0 0 12px',
  };

  const heroText = {
    color: '#4b5563',
    fontSize: '18px',
    margin: '0',
    lineHeight: '24px',
  };

  const divider = {
    borderTop: '1px solid #e5e7eb',
    margin: '32px 0',
  };

  const contentSection = {
    padding: '0 48px',
  };

  const sectionTitle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111827',
    margin: '0 0 24px',
  };

  const bookingCard = {
    backgroundColor: '#f8fafc',
    padding: '24px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  };

  const bookingNumberStyle = {
    fontSize: '16px',
    color: '#6b7280',
    margin: '0 0 16px',
  };

  const detailsGrid = {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(2, 1fr)' as const,
    gap: '16px',
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '6px',
  };

  const detailLabel = {
    fontSize: '14px',
    color: '#6b7280',
    margin: '0',
  };

  const detailValue = {
    fontSize: '16px',
    color: '#111827',
    fontWeight: 'bold',
    margin: '4px 0 0',
  };

  const helpSection = {
    padding: '0 48px 32px',
    textAlign: 'center' as const,
  };

  const helpText = {
    color: '#6b7280',
    fontSize: '16px',
    margin: '0',
  };

  const link = {
    color: '#4f46e5',
    textDecoration: 'none',
  };

  const footer = {
    padding: '32px 48px 0',
    textAlign: 'center' as const,
  };

  const footerText = {
    color: '#6b7280',
    fontSize: '14px',
    margin: '0 0 16px',
  };

  return (
    <Html>
      <Head />
      <Preview>Réservation confirmée - Wild Arena #{bookingNumber}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Heading style={logo}>Wild Arena</Heading>
          </Section>

          <Section style={heroSection}>
            <Heading style={heroTitle}>Réservation Confirmée! 🎮</Heading>
            <Text style={heroText}>
              Merci {customerName} pour votre réservation
            </Text>
          </Section>

          <Hr style={divider} />

          <Section style={contentSection}>
            <Text style={sectionTitle}>Détails de la Réservation</Text>
            <Section style={bookingCard}>
              <Text style={bookingNumberStyle}>Réservation #{bookingNumber}</Text>
              <Section style={detailsGrid}>
                <div>
                  <Text style={detailLabel}>Service</Text>
                  <Text style={detailValue}>{bookingDetails.service}</Text>
                </div>
                <div>
                  <Text style={detailLabel}>Date</Text>
                  <Text style={detailValue}>{bookingDetails.date}</Text>
                </div>
                <div>
                  <Text style={detailLabel}>Heure / Période</Text>
                  <Text style={detailValue}>{bookingDetails.time || bookingDetails.period}</Text>
                </div>
                <div>
                  <Text style={detailLabel}>Nombre de joueurs</Text>
                  <Text style={detailValue}>{bookingDetails.players}</Text>
                </div>
                <div>
                  <Text style={detailLabel}>Prix total</Text>
                  <Text style={detailValue}>{bookingDetails.price}</Text>
                </div>
              </Section>
            </Section>
          </Section>

          <Section style={helpSection}>
            <Text style={helpText}>
              Des questions? <Link style={link} href="mailto:info.wild.arena@gmail.com">Contactez notre équipe</Link>
            </Text>
          </Section>

          <Hr style={divider} />
          <Section style={footer}>
            <Text style={footerText}>
            &copy; {new Date().getFullYear()} Wild Arena. Tous droits réservés.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default BookingConfirmationEmail;
