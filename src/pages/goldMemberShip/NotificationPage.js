import "../../assest/css/goldMemberShip/myNotification.css";
import Notification from "../../components/goldMemberShip/Notification";
import { useEffect } from "react";

export default function NotificationPage() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  return (
    <>
      <h2 className="notif-title">الاشعارات </h2>
      <div className="noti-wrapper">
        <Notification
          noti={{
            time: "قبل 5 دقائق",
            text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد",
          }}
        />
        <Notification
          noti={{
            time: "قبل 5 دقائق",
            text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد",
          }}
        />
        <Notification
          noti={{
            time: "قبل 5 دقائق",
            text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد",
          }}
        />
        <Notification
          noti={{
            time: "قبل 5 دقائق",
            text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد",
          }}
        />
        <Notification
          noti={{
            time: "قبل 5 دقائق",
            text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفسالمساحة، لقد تم توليد هذا النص من مولد النص العربى،حيث يمكنك أن تولد مثل هذا النص أو العديد",
          }}
        />
      </div>
    </>
  );
}