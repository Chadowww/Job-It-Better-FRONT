import CandidateModalRegister from "@/components/molecules/candidate/CandidateModalRegister.vue";
import { userRegister } from "@/services/user/UserRegistrationService";
import { mount } from "@vue/test-utils";
import store from "@/store";
jest.mock("@/services/user/UserRegistrationService", () => ({
  userRegister: jest.fn(),
}));
// jest.mock("@/utils/formValidations", () => ({
//   errors: jest.fn().mockReturnValue([
//     {
//       email: null,
//       password: null,
//       repeatPassword: null,
//       company: null,
//       candidate: null,
//     },
//   ]),
//   verifyEmail: jest.fn().mockReturnValue(null),
//   verifyPassword: jest.fn().mockReturnValue(null),
//   verifyCandidate: jest.fn().mockReturnValue(null),
//   verifyRepeatPassword: jest.fn().mockReturnValue(null),
// }));

describe("CandidateModalRegister", () => {
  it("should render", () => {
    const wrapper = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("S'inscrire");
    expect(wrapper.find("button").text()).toBe("S'inscrire");
  });

  it("should run register function", async () => {
    const wrapper = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });

    const emailInput = wrapper.find('input[name="email"]');
    await emailInput.setValue("test@example.com");

    const passwordVerifInput = wrapper.find('input[name="password-verif"]');
    await passwordVerifInput.setValue("Fw7jzpdr7!");

    const passwordInput = wrapper.find('input[name="password"]');
    await passwordInput.setValue("Fw7jzpdr7!");

    const firstNameInput = wrapper.find('input[name="firstname"]');
    await firstNameInput.setValue("John");

    const lastNameInput = wrapper.find('input[name="lastname"]');
    await lastNameInput.setValue("Doe");
    await wrapper.vm.$nextTick();

    await wrapper.find("button").trigger("click");
    expect(userRegister).toHaveBeenCalled();
  });

  it("should show error email", async () => {
    const wrapper = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });

    const emailField = wrapper.find("input[type='email']");
    await emailField.setValue("test");

    expect(wrapper.find(".error").text()).toBe("L'email n'est pas valide.");
  });
});
