import { StyleSheet, ScrollView } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoansAndSavingsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      // headerImage={null} // Remove or replace with a SACCO-related image
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" >Loans & Savings Info</ThemedText>
      </ThemedView>

      <Collapsible title="How to Apply for a Loan">
        <ThemedText>
          To apply for a loan, follow these steps:
          {'\n'}1. Ensure you have enough savings.
          {'\n'}2. Select a loan type that fits your needs.
          {'\n'}3. Submit your loan request through the portal.
          {'\n'}4. Wait for approval and disbursement.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Savings Plans Available">
        <ThemedText>
          - **Fixed Deposit Savings**: Earn higher interest over time.
          {'\n'}- **Regular Savings**: Deposit and withdraw anytime.
          {'\n'}- **Youth & Women Savings**: Special benefits for specific groups.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Frequently Asked Questions (FAQs)">
        <ThemedText>
          **Q: How long does it take to approve a loan?**{'\n'}
          A: Loan approvals take 24-48 hours after submission.
          {'\n\n'}
          **Q: Can I withdraw my savings anytime?**{'\n'}
          A: Yes, except for fixed deposit accounts.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    padding: 16,
  },

  heading: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },

});


