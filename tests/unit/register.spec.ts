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
    await emailInput.setValue("a.test@example.com");

    const passwordField = wrapper.find("input[name='password']");
    await passwordField.setValue("Fw7jzpdr7!");

    const passwordVerifField = wrapper.find("input[name='password-verif']");
    await passwordVerifField.setValue("Fw7jzpdr7!");

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

  it("should show error password", async () => {
    const wrapper = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });
    const emailField = wrapper.find("input[type='email']");
    await emailField.setValue("a.sale@outlook.fr");

    const passwordField = wrapper.find("input[type='password']");
    await passwordField.setValue("fw7jzpdr7!");

    expect(wrapper.find(".error").text()).toBe(
      "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
    );
  });

  it("should show error password verif", async () => {
    const wrapper = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });

    const emailField = wrapper.find("input[type='email']");
    await emailField.setValue("a.sale@outlook.fr");

    const passwordField = wrapper.find("input[name='password']");
    await passwordField.setValue("Fw7jzpdr7!");

    const passwordVerifField = wrapper.find("input[name='password-verif']");
    await passwordVerifField.setValue("fw7jzpdr7!");

    expect(wrapper.find(".error").text()).toBe(
      "Les mots de passe ne sont pas identiques."
    );
  });

  it("should show error firstname", async () => {
    const wrapper = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });

    const emailInput = wrapper.find('input[name="email"]');
    await emailInput.setValue("a.test@example.com");

    const passwordField = wrapper.find("input[name='password']");
    await passwordField.setValue("Fw7jzpdr7!");

    const passwordVerifField = wrapper.find("input[name='password-verif']");
    await passwordVerifField.setValue("Fw7jzpdr7!");

    const firstNameInput = wrapper.find('input[name="firstname"]');
    await firstNameInput.setValue("J");

    expect(wrapper.find(".error").text()).toBe(
      "Les informations du candidat ne sont pas valide. Veuillez vérifier les champs Prénom et Nom."
    );
  });

  it("should show error lastname", async () => {
    const wrapper = mount(CandidateModalRegister, {
      global: {
        plugins: [store],
      },
    });

    const emailInput = wrapper.find('input[name="email"]');
    await emailInput.setValue("a.test@example.com");

    const passwordField = wrapper.find("input[name='password']");
    await passwordField.setValue("Fw7jzpdr7!");

    const passwordVerifField = wrapper.find("input[name='password-verif']");
    await passwordVerifField.setValue("Fw7jzpdr7!");

    const firstNameInput = wrapper.find('input[name="firstname"]');
    await firstNameInput.setValue("John");

    const lastNameInput = wrapper.find('input[name="lastname"]');
    await lastNameInput.setValue("D");

    expect(wrapper.find(".error").text()).toBe(
      "Les informations du candidat ne sont pas valide. Veuillez vérifier les champs Prénom et Nom."
    );
  });
});
