import java.awt.*;
import java.rmi.ConnectIOException;
import javax.swing.*;


public class fenster {
    public static void main(String[] args) {

            javax.swing.SwingUtilities.invokeLater(new Runnable() {
                public void run() {
        
            JFrame fenster = new JFrame("Onlinebanking");
            fenster.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            fenster.setSize(800, 500);

            ImageIcon img = new ImageIcon("coin.jpg");
            fenster.setIconImage(img.getImage());

            fenster.add(new JLabel(new ImageIcon("frontend.PNG")));

            fenster.setVisible(true);
        
            }    
        });
    }
}