import Project from "../project/Project";
import "./projectsAndSkills.css";
import { projects } from "../../data"

function ProjectsAndSkills() {
  return (
    <div className="projects-and-skills">
        <div className="skills-container">
            <div className="skills-title">
                <h1 className="skill-title-format">Tech Skills</h1>
            </div>
            <div className="skills">
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="-10 -5 1034 1034"
                    version="1.1"
                >
                    <path
                    fill="currentColor"
                    d="M75 177v850h850v-850h-850zM722 562q39 0 66.5 15t46.5 49l-62 40q-10 -18 -22 -26t-29 -8t-27.5 9.5t-10.5 24.5q0 17 11 28q10 9 38 21l20 8q55 24 78 49q28 30 28 77q0 52 -38 82q-36 29 -95 29q-53 0 -91 -23q-35 -22 -54 -59l65 -37q14 23 31 35q20 13 48 13 q24 0 39 -11t15 -29t-15 -30q-11 -8 -43 -22l-20 -9q-48 -20 -70 -45q-26 -29 -26 -75t32 -76t85 -30zM458 567h80v273q0 60 -34 91q-31 29 -86 29q-45 0 -77 -21q-27 -19 -43 -52l66 -39q11 21 20 29q12 12 31 12q21 0 31 -10q12 -12 12 -40v-272z"
                    />
                </svg>
                </div>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                    d="M7.50159 0H10.0797V1.07812H8.57971V2.15625H10.0797V3.23438H7.50159V0Z"
                    fill="currentColor"
                    />
                    <path
                    d="M10.5953 0H13.1735V0.9375H11.6735V1.125H13.1735V3.28125H10.5953V2.29688H12.0953V2.10938H10.5953V0Z"
                    fill="currentColor"
                    />
                    <path
                    d="M13.6891 0H16.2672V0.9375H14.7672V1.125H16.2672V3.28125H13.6891V2.29688H15.1891V2.10938H13.6891V0Z"
                    fill="currentColor"
                    />
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9912 24L5.04739 22.0723L3 4.71655H21L18.9541 22.0696L11.9912 24ZM7.04736 12.5727L7.23814 14.7013L14.6153 14.7013L14.3682 17.4619L11.9941 18.1027L11.992 18.1034L9.62135 17.4633L9.4698 15.7656H7.33301L7.63123 19.1079L11.9915 20.3183L16.3579 19.1078L16.8901 13.1443L16.9421 12.5727L17.3264 8.26428H6.66406L6.85756 10.3929H14.9936L14.7999 12.5727L7.04736 12.5727Z"
                    fill="currentColor"
                    />
                </svg>
                </div>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 24 24"
                    role="img"
                >
                    <title>React icon</title>
                    <path 
                    fill="currentColor"
                    d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z" />
                </svg>
                </div>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 24 24"
                    role="img"
                >
                    <title>Redux icon</title>
                    <path 
                    fill="currentColor"
                    d="M16.633 16.504c.869-.075 1.543-.84 1.499-1.754-.046-.914-.795-1.648-1.708-1.648h-.061c-.943.031-1.678.824-1.648 1.769.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.004 4.795-1.603.838-3.296 1.154-4.944.929-1.378-.194-2.456-.81-3.116-1.798-.988-1.499-1.078-3.116-.255-4.734.601-1.169 1.499-2.023 2.099-2.443-.15-.389-.33-1.048-.42-1.542-4.436 3.177-3.985 7.521-2.637 9.574 1.004 1.498 3.057 2.456 5.304 2.456.599 0 1.229-.044 1.843-.194 3.896-.749 6.847-3.086 8.54-6.532l.014-.031zM21.981 12.758c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074c.675-.03 1.259-.45 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.004 2.622 2.322 3.236 3.896.538 1.288.509 2.547-.045 3.597-.854 1.647-2.293 2.517-4.195 2.517-1.199 0-2.367-.375-2.967-.644-.359.298-.959.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.093-1.647 5.918-3.236.898-1.798.824-4.824-1.469-7.416l-.014.03zM6.49 17.042c.029.899.793 1.648 1.708 1.648h.06c.959-.03 1.693-.823 1.648-1.768 0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029-1.243-2.098-1.768-4.346-1.572-6.771.119-1.828.719-3.417 1.797-4.735.899-1.124 2.592-1.679 3.746-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492-2.742 0-5.273 1.993-6.293 4.915-1.393 3.896-.479 7.641 1.229 10.638-.149.195-.239.539-.209.868z" />
                </svg>
                </div>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 15 15"
                    fill="none"
                >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L2.00634 11.3742L4.06264 10.5422C4.62921 10.313 5.00004 9.7629 5.00004 9.15171V4H6.00004V9.15171C6.00004 10.1704 5.382 11.0871 4.43772 11.4692L3.09826 12.0112L7.5 14.5788L14 10.7872V4.21281ZM7 6C7 4.89543 7.89543 4 9 4H10.1667C11.1792 4 12 4.82081 12 5.83333V6H11V5.83333C11 5.3731 10.6269 5 10.1667 5H9C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7H10C11.1046 7 12 7.89543 12 9C12 10.1046 11.1046 11 10 11H9C7.89543 11 7 10.1046 7 9H8C8 9.55228 8.44772 10 9 10H10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8H9C7.89543 8 7 7.10457 7 6Z"
                    fill="currentColor"
                    />
                </svg>
                </div>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 24 24"
                    role="img"
                >
                    <path 
                    fill="currentColor"
                    d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                </svg>
                </div>
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100px"
                    height="100px"
                    viewBox="0 0 24 24"
                    role="img"
                >
                    <title>PostgreSQL icon</title>
                    <path 
                    fill="currentColor"
                    d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.011.33.024.653.037.98.041 1.036.067 1.993.378 2.832.05.137.187.843.727 1.466.54.624 1.598 1.013 2.803.755.85-.182 1.931-.51 2.649-1.532.71-1.01 1.03-2.459 1.093-4.809.016-.127.035-.235.055-.336l.169.015h.02c.907.041 1.891-.088 2.713-.47.728-.337 1.279-.678 1.68-1.283.1-.15.21-.331.24-.643s-.149-.8-.446-1.025c-.595-.452-.969-.28-1.37-.197a6.27 6.27 0 0 1-1.202.146c1.156-1.947 1.985-4.015 2.458-5.845.28-1.08.437-2.076.45-2.947.013-.871-.058-1.642-.58-2.309C21.36.6 19.067.024 17.293.004c-.055-.001-.11-.002-.165-.001zm-.047.64c1.678-.016 3.822.455 5.361 2.422.346.442.449 1.088.437 1.884-.013.795-.16 1.747-.429 2.79-.522 2.02-1.508 4.375-2.897 6.488a.756.756 0 0 0 .158.086c.29.12.951.223 2.27-.048.332-.07.575-.117.827.075a.52.52 0 0 1 .183.425.704.704 0 0 1-.13.336c-.255.383-.758.746-1.403 1.045-.571.266-1.39.405-2.116.413-.364.004-.7-.024-.985-.113l-.018-.007c-.11 1.06-.363 3.153-.528 4.108-.132.77-.363 1.382-.804 1.84-.44.458-1.063.734-1.901.914-1.038.223-1.795-.017-2.283-.428-.487-.41-.71-.954-.844-1.287-.092-.23-.14-.528-.186-.926-.046-.398-.08-.885-.103-1.434a51.426 51.426 0 0 1-.03-2.523 3.061 3.061 0 0 1-1.552.76c-.689.117-1.304.002-1.671-.09a2.276 2.276 0 0 1-.52-.201c-.17-.091-.332-.194-.44-.397a.56.56 0 0 1-.057-.381.61.61 0 0 1 .218-.331c.198-.161.46-.251.855-.333.719-.148.97-.249 1.123-.37.13-.104.277-.314.537-.622a1.16 1.16 0 0 1-.003-.041 2.96 2.96 0 0 1-1.33-.358c-.15.158-.916.968-1.85 2.092-.393.47-.827.74-1.285.759-.458.02-.872-.211-1.224-.552-.703-.683-1.264-1.858-1.753-3.186-.488-1.328-.885-2.807-1.167-4.067-.283-1.26-.45-2.276-.474-2.766-.105-2.082.382-3.485 1.217-4.37.836-.885 1.982-1.22 3.099-1.284 2.005-.115 3.909.584 4.294.734.742-.504 1.698-.818 2.892-.798a7.39 7.39 0 0 1 1.681.218l.02-.009a6.854 6.854 0 0 1 .739-.214A9.626 9.626 0 0 1 17.08.642zm.152.67h-.146a8.74 8.74 0 0 0-1.704.192c1.246.552 2.187 1.402 2.85 2.25a8.44 8.44 0 0 1 1.132 1.92c.11.264.184.487.226.66.021.087.035.16.04.236.002.038.004.077-.012.144 0 .003-.005.01-.006.013.03.876-.187 1.47-.213 2.306-.02.606.135 1.318.173 2.095.036.73-.052 1.532-.526 2.319.04.048.076.096.114.144 1.254-1.975 2.158-4.16 2.64-6.023.258-1.003.395-1.912.407-2.632.01-.72-.124-1.242-.295-1.46-1.342-1.716-3.158-2.153-4.68-2.165zm-4.79.256c-1.182.003-2.03.36-2.673.895-.663.553-1.108 1.31-1.4 2.085-.347.92-.466 1.81-.513 2.414l.013-.008c.357-.2.826-.4 1.328-.516.502-.115 1.043-.151 1.533.039s.895.637 1.042 1.315c.704 3.257-.219 4.468-.559 5.382a9.61 9.61 0 0 0-.331 1.013c.043-.01.086-.022.129-.026.24-.02.428.06.54.108.342.142.577.44.704.78.033.089.057.185.071.284a.336.336 0 0 1 .02.127 55.14 55.14 0 0 0 .013 3.738c.023.538.057 1.012.1 1.386.043.373.104.657.143.753.128.32.315.739.653 1.024.338.284.823.474 1.709.284.768-.165 1.242-.394 1.559-.723.316-.329.505-.787.626-1.488.181-1.05.545-4.095.589-4.668-.02-.432.044-.764.182-1.017.142-.26.362-.419.552-.505.095-.043.184-.072.257-.093a5.956 5.956 0 0 0-.243-.325 4.456 4.456 0 0 1-.666-1.099 8.296 8.296 0 0 0-.257-.483c-.133-.24-.301-.54-.477-.877-.352-.675-.735-1.493-.934-2.29-.198-.796-.227-1.62.281-2.201.45-.516 1.24-.73 2.426-.61-.035-.105-.056-.192-.115-.332a7.817 7.817 0 0 0-1.041-1.764c-1.005-1.285-2.632-2.559-5.146-2.6h-.115zm-6.642.052c-.127 0-.254.004-.38.011-1.01.058-1.965.351-2.648 1.075-.684.724-1.134 1.911-1.036 3.876.019.372.181 1.414.459 2.652.277 1.238.67 2.695 1.142 3.982.473 1.287 1.046 2.407 1.59 2.937.274.265.512.372.728.363.217-.01.478-.135.797-.518a43.244 43.244 0 0 1 1.81-2.048 3.497 3.497 0 0 1-1.167-3.15c.103-.739.117-1.43.105-1.976-.012-.532-.05-.886-.05-1.107a.336.336 0 0 1 0-.019v-.005l-.001-.006v-.001a9.893 9.893 0 0 1 .592-3.376c.28-.744.697-1.5 1.322-2.112-.614-.202-1.704-.51-2.884-.568a7.603 7.603 0 0 0-.38-.01zM18.199 6.9c-.679.009-1.06.184-1.26.413-.283.325-.31.895-.134 1.597.175.703.537 1.489.877 2.142.17.327.335.621.468.86.134.24.232.41.292.555.055.134.116.252.178.362.263-.555.31-1.1.283-1.668-.035-.703-.198-1.422-.174-2.15.027-.851.195-1.405.21-2.063a5.793 5.793 0 0 0-.74-.048zm-8.234.115a2.82 2.82 0 0 0-.616.074 4.665 4.665 0 0 0-1.153.449 2.417 2.417 0 0 0-.349.228l-.022.02c.006.146.035.5.047 1.021.012.57-.002 1.297-.112 2.084-.239 1.71 1.002 3.126 2.46 3.128.085-.351.225-.707.365-1.082.406-1.094 1.205-1.892.532-5.006-.11-.51-.328-.716-.628-.832a1.474 1.474 0 0 0-.524-.084zm7.917.204h.05c.066.002.127.009.18.022.054.012.1.03.138.055a.164.164 0 0 1 .075.11l-.001.008h.001-.001a.24.24 0 0 1-.035.135.668.668 0 0 1-.11.15.677.677 0 0 1-.386.212.59.59 0 0 1-.41-.103.608.608 0 0 1-.13-.118.26.26 0 0 1-.063-.127.17.17 0 0 1 .042-.128.384.384 0 0 1 .117-.09c.096-.054.226-.094.373-.116.055-.008.109-.012.16-.013zm-7.82.168c.053 0 .109.005.166.013.153.021.289.062.393.122a.446.446 0 0 1 .133.106.223.223 0 0 1 .054.17.302.302 0 0 1-.075.154.649.649 0 0 1-.143.13.64.64 0 0 1-.448.113.728.728 0 0 1-.42-.228.71.71 0 0 1-.118-.164.28.28 0 0 1-.041-.177c.015-.108.104-.164.191-.195a.866.866 0 0 1 .307-.04zm9.06 7.343l-.003.001c-.147.053-.268.075-.37.12a.452.452 0 0 0-.239.214c-.063.115-.117.319-.101.666a.51.51 0 0 0 .148.07c.171.052.458.086.778.081.638-.007 1.423-.156 1.84-.35a3.95 3.95 0 0 0 .943-.615h-.001c-1.393.288-2.18.211-2.663.012a1.315 1.315 0 0 1-.332-.2zm-8.031.094h-.021c-.053.005-.13.023-.279.188-.348.39-.47.635-.757.864-.287.228-.66.35-1.405.503-.236.048-.371.101-.461.144.029.024.026.03.07.053.109.06.249.113.362.142.32.08.846.173 1.395.08.549-.094 1.12-.357 1.607-1.04.084-.118.093-.292.024-.479-.07-.187-.223-.348-.331-.393a.653.653 0 0 0-.204-.06z" />
                </svg>
                </div>
            </div>
        </div>
        <div className="projects-container">
            <div className="projects-wrapper">
                <div className="projects-header">
                    <h1 className="projects-title">Projects</h1>
                </div>
                <div className="projects">
                    {projects?.map(p => <Project
                        key={p.id}
                        img={p.homeImg}
                        link={p.link}
                        name={p.name}
                        desc={p.description}
                    />)}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProjectsAndSkills;
