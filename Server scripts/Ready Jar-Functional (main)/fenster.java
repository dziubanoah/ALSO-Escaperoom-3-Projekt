import java.awt.*;
import java.rmi.ConnectIOException;
import java.util.random.RandomGenerator;
import javax.swing.*;


public class fenster {
    public static void main(String[] args) {

            javax.swing.SwingUtilities.invokeLater(new Runnable() {
                public void run() {
        
            JFrame fenster = new JFrame("Onlinebanking");
            fenster.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            fenster.setSize(150, 200);
            fenster.getContentPane().setBackground(Color.BLACK);

            ImageIcon img = new ImageIcon("coin.jpg");
            fenster.setIconImage(img.getImage());

            JLabel label = new JLabel(new ImageIcon("frontend_small.JPG"));
            fenster.add(label);
            fenster.pack();
            

            fenster.setVisible(true);
        
            }    
        });
    }
}