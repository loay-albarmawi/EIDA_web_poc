var LOG;
var service_context = 0;
/**
 * Secure is decalared for processing connection on secure layer or not --vishal
 */
var secure;
/**
 * ErrorCodes.
 * This object defines Toolkit error codes
 */
var ErrorCodes = {
  SERVICE_COMMUNICATION_ERROR: 301,
  SERVICE_BUSY: 302,
  INVALID_FIELD: 303,
};
/**
 * ExceptionType.
 * This object defines Toolkit error types
 */
var ExceptionType = {
  TOOLKIT_ERROR: "TOOLKIT_ERROR",
  CARD_PIN_ERROR: "CARD_PIN_ERROR",
};
/**
 * FingerIndexses
 * This object defines finger indexes
 *
 */
this.FINGER_INDEXS = {
  NONE: 0,
  NO_MEANING: 3,
  RIGHT_THUMB: 5,
  RIGHT_INDEX: 9,
  RIGHT_MIDDLE: 13,
  RIGHT_RING: 17,
  RIGHT_LITTLE: 21,
  LEFT_THUMB: 6,
  LEFT_INDEX: 10,
  LEFT_MIDDLE: 14,
  LEFT_RING: 18,
  LEFT_LITTLE: 22,
};
var services;
/**
 * Class ToolkitException.
 * This class defines exception details
 */
function ToolkitException(code, message, errorType, attemptsLeft) {
  this.code;
  this.message;
  this.errorType;
  this.attemptsLeft;
}
/**
 * Class ModifiablePublicData.
 * This class defines ModifiablePublicData fields
 */
function ModifiablePublicData(xmlModifiableDataBody) {
  this.occupationCode = xmlModifiableDataBody.OccupationCode;
  this.occupationArabic = xmlModifiableDataBody.OccupationArabic;
  this.occupationEnglish = xmlModifiableDataBody.OccupationEnglish;
  this.familyID = xmlModifiableDataBody.FamilyId;
  this.occupationTypeArabic = xmlModifiableDataBody.OccupationTypeArabic;
  this.occupationTypeEnglish = xmlModifiableDataBody.OccupationTypeEnglish;
  this.occupationFieldCode = xmlModifiableDataBody.OccupationFieldCode;
  this.companyNameArabic = xmlModifiableDataBody.CompanyNameArabic;
  this.companyNameEnglish = xmlModifiableDataBody.CompanyNameEnglish;
  this.maritalStatusCode = xmlModifiableDataBody.MaritalStatusCode;
  this.husbandIdNumber = xmlModifiableDataBody.HusbandIdNumber;
  this.sponsorTypeCode = xmlModifiableDataBody.SponsorTypeCode;
  this.sponsorUnifiedNumber = xmlModifiableDataBody.SponsorUnifiedNumber;
  this.sponsorName = xmlModifiableDataBody.SponsorName;
  this.residencyTypeCode = xmlModifiableDataBody.ResidencyTypeCode;
  this.residencyNumber = xmlModifiableDataBody.ResidencyNumber;
  this.residencyExpiryDate = xmlModifiableDataBody.ResidencyExpiryDate;
  this.passportNumber = xmlModifiableDataBody.PassportNumber;
  this.passportTypeCode = xmlModifiableDataBody.PassportTypeCode;
  this.passportCountryCode = xmlModifiableDataBody.PassportCountryCode;
  this.passportCountryArabic = xmlModifiableDataBody.PassportCountryArabic;
  this.passportCountryEnglish = xmlModifiableDataBody.PassportCountryEnglish;
  this.passportIssueDate = xmlModifiableDataBody.PassportIssueDate;
  this.passportExpiryDate = xmlModifiableDataBody.PassportExpiryDate;
  this.qualificationLevelCode = xmlModifiableDataBody.QualificationLevelCode;
  this.qualificationLevelArabic =
    xmlModifiableDataBody.QualificationLevelArabic;
  this.qualificationLevelEnglish =
    xmlModifiableDataBody.QualificationLevelEnglish;
  this.degreeDescriptionArabic = xmlModifiableDataBody.DegreeDescriptionArabic;
  this.degreeDescriptionEnglish =
    xmlModifiableDataBody.DegreeDescriptionEnglish;
  this.fieldOfStudyArabic = xmlModifiableDataBody.FieldOfStudyArabic;
  this.fieldOfStudyEnglish = xmlModifiableDataBody.FieldOfStudyEnglish;
  this.fieldOfStudyCode = xmlModifiableDataBody.FieldOfStudyCode;
  this.placeOfStudyArabic = xmlModifiableDataBody.PlaceOfStudyArabic;
  this.placeOfStudyEnglish = xmlModifiableDataBody.PlaceOfStudyEnglish;
  this.dateOfGraduation = xmlModifiableDataBody.DateOfGraduation;
  this.motherFullNameArabic = xmlModifiableDataBody.MotherFullNameArabic;
  this.motherFullNameEnglish = xmlModifiableDataBody.MotherFullNameEnglish;
}
/**
 * Class NonModifiablePublicData.
 * This class defines NonModifiablePublicData fields
 */
function NonModifiablePublicData(xmlNonModifiableDataBody) {
  this.iDType = xmlNonModifiableDataBody.IdType;
  this.gender = xmlNonModifiableDataBody.Gender;
  this.dateOfBirth = xmlNonModifiableDataBody.DateOfBirth;
  this.issueDate = xmlNonModifiableDataBody.IssueDate;
  this.expiryDate = xmlNonModifiableDataBody.ExpiryDate;
  this.titleArabic = xmlNonModifiableDataBody.TitleArabic;
  this.titleEnglish = xmlNonModifiableDataBody.TitleEnglish;
  this.fullNameArabic = xmlNonModifiableDataBody.FullNameArabic;
  this.fullNameEnglish = xmlNonModifiableDataBody.FullNameEnglish;
  this.nationalityArabic = xmlNonModifiableDataBody.NationalityArabic;
  this.nationalityEnglish = xmlNonModifiableDataBody.NationalityEnglish;
  this.nationalityCode = xmlNonModifiableDataBody.NationalityCode;
  this.placeOfBirthArabic = xmlNonModifiableDataBody.PlaceOfBirthArabic;
  this.placeOfBirthEnglish = xmlNonModifiableDataBody.PlaceOfBirthEnglish;
}
/**
 * Class HomeAddress.
 * This class defines HomeAddress fields
 */
function HomeAddress(xmlHomeAddressBody) {
  if (!xmlHomeAddressBody) {
    return null;
  }
  this.addressTypeCode = xmlHomeAddressBody.AddressTypeCode;
  this.flatNo = xmlHomeAddressBody.FlatNo;
  this.buildingNameArabic = xmlHomeAddressBody.BuildingNameArabic;
  this.buildingNameEnglish = xmlHomeAddressBody.BuildingNameEnglish;
  this.streetArabic = xmlHomeAddressBody.StreetArabic;
  this.streetEnglish = xmlHomeAddressBody.StreetEnglish;
  this.locationCode = xmlHomeAddressBody.LocationCode;
  this.areaCode = xmlHomeAddressBody.AreaCode;
  this.areaDescArabic = xmlHomeAddressBody.AreaDescArabic;
  this.areaDescEnglish = xmlHomeAddressBody.AreaDescEnglish;
  this.emiratesCode = xmlHomeAddressBody.EmiratesCode;
  this.pOBOX = xmlHomeAddressBody.POBOX;
  this.cityCode = xmlHomeAddressBody.CityCode;
  this.cityDescArabic = xmlHomeAddressBody.CityDescArabic;
  this.cityDescEnglish = xmlHomeAddressBody.CityDescEnglish;
  this.emiratesDescArabic = xmlHomeAddressBody.EmiratesDescArabic;
  this.emiratesDescEnglish = xmlHomeAddressBody.EmiratesDescEnglish;
  this.email = xmlHomeAddressBody.Email;
  this.residentPhoneNumber = xmlHomeAddressBody.ResidentPhoneNumber;
  this.mobilePhoneNumber = xmlHomeAddressBody.MobilePhoneNumber;
}
/**
 * Class WorkAddress.
 * This class defines WorkAddress fields
 */
function WorkAddress(xmlWorkAddressBody) {
  if (!xmlWorkAddressBody) {
    return null;
  }
  this.addressTypeCode = xmlWorkAddressBody.AddressTypeCode;
  this.locationCode = xmlWorkAddressBody.LocationCode;
  this.companyNameArabic = xmlWorkAddressBody.CompanyNameArabic;
  this.companyNameEnglish = xmlWorkAddressBody.CompanyNameEnglish;
  this.emiratesCode = xmlWorkAddressBody.EmiratesCode;
  this.emiratesDescArabic = xmlWorkAddressBody.EmiratesDescArabic;
  this.emiratesDescEnglish = xmlWorkAddressBody.EmiratesDescEnglish;
  this.cityCode = xmlWorkAddressBody.CityCode;
  this.cityDescArabic = xmlWorkAddressBody.CityDescArabic;
  this.cityDescEnglish = xmlWorkAddressBody.CityDescEnglish;
  this.pOBOX = xmlWorkAddressBody.POBOX;
  this.streetArabic = xmlWorkAddressBody.StreetArabic;
  this.streetEnglish = xmlWorkAddressBody.StreetEnglish;
  this.areaCode = xmlWorkAddressBody.AreaCode;
  this.areaDescArabic = xmlWorkAddressBody.AreaDescArabic;
  this.areaDescEnglish = xmlWorkAddressBody.AreaDescEnglish;
  this.buildingNameArabic = xmlWorkAddressBody.BuildingNameArabic;
  this.buildingNameEnglish = xmlWorkAddressBody.BuildingNameEnglish;
  this.landPhoneNumber = xmlWorkAddressBody.LandPhoneNumber;
  this.mobilePhoneNumber = xmlWorkAddressBody.MobilePhoneNumber;
  this.email = xmlWorkAddressBody.Email;
}
/**
 * Class Wife.
 * This class defines Wife fields
 */
function Wife(wifeData) {
  this.wifeIDN = wifeData.WifeIdNumber;
  this.fullNameArabic = wifeData.FullNameArabic;
  this.fullNameEnglish = wifeData.FullNameEnglish;
  this.nationalityCode = wifeData.NationalityCode;
  this.nationalityArabic = wifeData.NationalityArabic;
  this.nationalityEnglish = wifeData.NationalityEnglish;
}
/**
 * Class Resources.
 * This class defines Health Data Resources fields.
 */

function Resource(resourceData) {
  this.ResourceType = resourceData.resourceType;
  if ("Allergy" === this.ResourceType) {
    this.resourceType = resourceData.resourceType;
    this.allergyDisplay = resourceData.AllergyDisplay;
    this.allergyRecordedDate = resourceData.AllergyRecordedDate;
  } else if ("Diagnosis" === this.ResourceType) {
    this.resourceType = resourceData.resourceType;
    this.diagnosisCode = resourceData.DiagnosisCode;
    this.diagnosisDescription = resourceData.DiagnosisDescription;
    this.diagnosisRecordedDate = resourceData.DiagnosisRecordedDate;
  } else if ("BloodGroup" === this.ResourceType) {
    this.resourceType = resourceData.resourceType;
    this.bloodGroup = resourceData.BloodGroup;
    this.recordedDate = resourceData.RecordedDate;
  } else if ("Insurance" === this.ResourceType) {
    this.resourceType = this.ResourceType;
    this.insuranceName = resourceData.InsuranceName;
    this.insuranceNumber = resourceData.InsuranceNumber;
    this.insuranceValidityStartDate = resourceData.InsuranceValidityStartDate;
    this.insuranceValidityEndDate = resourceData.InsuranceValidityEndDate;
  }
}
function OrganDonar(response) {
  this.organDonar = response;
}

/**
 * Class Child.
 * This class defines Child fields
 */
function Child(childData) {
  this.childIdNumber = childData.ChildIdNumber;
  this.firstNameArabic = childData.FirstNameArabic;
  this.firstNameEnglish = childData.FirstNameEnglish;
  this.gender = childData.Gender;
  this.dateOfBirth = childData.DateOfBirth;
  this.placeOfBirthArabic = childData.PlaceOfBirthArabic;
  this.placeOfBirthEnglish = childData.PlaceOfBirthEnglish;
  this.motherIdNumber = childData.MotherIdNumber;
  this.motherFullNameArabic = childData.MotherFullNameArabic;
  this.motherFullNameEnglish = childData.MotherFullNameEnglish;
}
/**
 * Class HeadOfFamily.
 * This class defines HeadOfFamily fields
 */
function HeadOfFamily(headData) {
  this.holderIDNumber = headData.HolderIdNumber;
  this.familyID = headData.FamilyId;
  this.emirateNameArabic = headData.EmirateNameArabic;
  this.emirateNameEnglish = headData.EmirateNameEnglish;
  this.firstNameArabic = headData.FirstNameArabic;
  this.firstNameEnglish = headData.FirstNameEnglish;
  this.fatherNameArabic = headData.FatherNameArabic;
  this.fatherNameEnglish = headData.FatherNameEnglish;
  this.grandFatherNameArabic = headData.GrandFatherNameArabic;
  this.grandFatherNameEnglish = headData.GrandFatherNameEnglish;
  this.tribeArabic = headData.TribeArabic;
  this.tribeEnglish = headData.TribeEnglish;
  this.clanArabic = headData.ClanArabic;
  this.clanEnglish = headData.ClanEnglish;
  this.nationalityCode = headData.NationalityCode;
  this.nationalityArabic = headData.NationalityArabic;
  this.nationalityEnglish = headData.NationalityEnglish;
  this.gender = headData.Gender;
  this.dateOfBirth = headData.DateOfBirth;
  this.placeOfBirthArabic = headData.PlaceOfBirthArabic;
  this.placeOfBirthEnglish = headData.PlaceOfBirthEnglish;
  this.motherFullNameArabic = headData.MotherFullNameArabic;
  this.motherFullNameEnglish = headData.MotherFullNameEnglish;
}
/**
 * Class Toolkit.
 * This class provides all methods required to access the Toolkit services
 */
function Toolkit(onOpenCB, onCloseCB, onErrorCB, options) {
  this.appOnOpenCB = onOpenCB;
  this.appOnCloseCB = onCloseCB;
  this.appOnErrorCB = onErrorCB;
  this.config_params = btoa(options.toolkitConfig || "");
  LOG = options.debugEnabled ? console.log.bind(console) : function () {};
  /**depending on agent mode assigning request on ws or wss --vishal */
  secure = options.agent_tls_enabled ? "wss://" : "ws://";

  var toolkitThis = this;
  var toolkitOnOpenCB = function (responseEvent) {
    LOG("Toolkit :: toolkitOnOpenCB() :: >>");
    services.ESTABLISH_CONTEXT.config_params = toolkitThis.config_params;
    var user_Agent = (navigator.sayswho = (function () {
      var N = navigator.appName,
        ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*([\d\.]+)/i);
      if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
      M = M ? [M[1], M[2]] : [N, navigator.appVersion, "-?"];
      return M.join(" ");
    })());
    if (null == user_Agent) {
      services.SendRequest(
        JSON.stringify(services.ESTABLISH_CONTEXT),
        wsOnContextEstablishedCB,
        toolkitThis.appOnOpenCB
      );
    } else {
      services.ESTABLISH_CONTEXT.user_agent = user_Agent;
      services.SendRequest(
        JSON.stringify(services.ESTABLISH_CONTEXT),
        wsOnContextEstablishedCB,
        toolkitThis.appOnOpenCB
      );
    }
  };
  var toolkitOnCloseCB = function (responseEvent) {
    LOG("Toolkit :: toolkitOnCloseCB() :: >>");
    toolkitThis.appOnCloseCB(responseEvent.code);
  };
  var toolkitOnErrorCB = function (responseEvent) {
    LOG("Toolkit :: toolkitOnErrorCB() :: >>");
    toolkitThis.appOnErrorCB(responseEvent);
  };
  services = new ToolkitService(
    toolkitOnOpenCB,
    toolkitOnCloseCB,
    toolkitOnErrorCB,
    options
  );
  var initialize = function (configParams) {
    LOG("Toolkit :: initialize() :: >>");
    // if (null == configParams || undefined == configParams) {
    //     throw "config options not provided.";
    // }
    configParams = configParams || "";
    LOG("configParams =" + configParams);
    this.config_params = configParams;
    services.establishConnection();
  };
  this.listReaders = function (appCallBack) {
    LOG("Toolkit :: listReaders() :: >>");
    services.LIST_READER_REQUEST.service_context = window.service_context;
    services.SendRequest(
      JSON.stringify(services.LIST_READER_REQUEST),
      toolkitListReaderCB,
      appCallBack
    );
  };
  this.registerDevice = function (
    encodedUserId,
    encodedPassword,
    deviceReferenceId,
    appCallBack
  ) {
    LOG("Toolkit :: registerDevice() :: >>");
    services.REGISTER_DEVICE.service_context = window.service_context;
    services.REGISTER_DEVICE.user_id = encodedUserId;
    services.REGISTER_DEVICE.password = encodedPassword;
    services.REGISTER_DEVICE.device_reference_id = deviceReferenceId;
    var validate = ValidateParams(services.REGISTER_DEVICE, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.REGISTER_DEVICE),
        toolkitRegisterDeviceCB,
        appCallBack
      );
    }
  };
  this.prepareRequest = function (requestId, appCallBack) {
    LOG("Toolkit :: prepareRequest() :: >>");
    services.PREPARE_REQUEST.service_context = window.service_context;
    services.PREPARE_REQUEST.card_context = 0;
    services.PREPARE_REQUEST.request_id = requestId;
    var validate = ValidateParams(services.PREPARE_REQUEST, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.PREPARE_REQUEST),
        toolkitPrepareRequestCB,
        appCallBack
      );
    }
  };
  var toolkitPrepareRequestCB = function (appCB, responseEvent) {
    LOG("Toolkit :: toolkitPrepareRequestCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      var response = parsor.response;
      LOG("Toolkit :: toolkitPrepareRequestCB() :: 1 :: response =" + response);
      appCB(response, null);
    } catch (error) {
      LOG("Toolkit :: toolkitPrepareRequestCB() :: Error ");
      appCB(null, error);
    }
  };
  var toolkitRegisterDeviceCB = function (appCallback, responseEvent) {
    LOG("Toolkit :: toolkitRegisterDeviceCB() :: >>");
    try {
      var registerDevResponse = new RegisterDeviceResponse(responseEvent);
      appCallback(registerDevResponse, null);
    } catch (error) {
      LOG("Toolkit :: toolkitRegisterDeviceCB() :: Error ");
      appCallback(null, error);
    }
  };
  var wsOnContextEstablishedCB = function (appCallback, response) {
    LOG("Toolkit :: wsOnContextEstablishedCB() :: >>");
    var result = JSON.parse(response.data);
    LOG(
      "Toolkit :: wsOnContextEstablishedCB() :: 1 :: response status =" +
        result.status
    );
    if ("fail" === result.status) {
      var error = new ToolkitException(
        result.error || ErrorCodes.SERVICE_COMMUNICATION_ERROR,
        result.description,
        ExceptionType.TOOLKIT_ERROR,
        null
      );
      appCallback(null, error);
    }
    if ("success" === result.status) {
      service_context = result.service_context;
      /**
       * Execute the on open callback by passing the response received
       * from server
       */
      appCallback(result.status, null);
    }
  };
  var toolkitListReaderCB = function (appCallBack, responseEvent) {
    LOG("Toolkit :: toolkitListReaderCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      var result = JSON.parse(responseEvent.data);
      var filterData = result.smartcard_readers;
      LOG(
        "Toolkit :: toolkitListReaderCB() :: 1 :: reader names =" + filterData
      );
      var listArray =
        filterData.indexOf(",") > -1 ? filterData.split(",") : filterData;
      var cardReaders = [];
      for (let i = 0; i < listArray.length; i++) {
        var cardRead = new CardReader(listArray[i]);
        cardReaders.push(cardRead);
      }
      var readerArray = cardReaders;
      appCallBack(readerArray, null);
    } catch (error) {
      LOG("Toolkit :: toolkitListReaderCB() :: Error ");
      appCallBack(null, error);
    }
  };
  this.getToolkitVersion = function (appCallBack) {
    LOG("Toolkit :: getToolkitVersion() :: >>");
    services.GET_TOOLKIT_VERSION.service_context = window.service_context;
    services.SendRequest(
      JSON.stringify(services.GET_TOOLKIT_VERSION),
      toolkitVersionCB,
      appCallBack
    );
  };
  var toolkitVersionCB = function (appCB, responseEvent) {
    LOG("Toolkit :: toolkitVersionCB() :: >>");
    var result = JSON.parse(responseEvent.data);
    LOG(
      "Toolkit :: toolkitVersionCB() :: 1 :: response status =" + result.status
    );
    if ("fail" === result.status) {
      var error = new ToolkitException(
        result.error,
        result.description,
        ExceptionType.TOOLKIT_ERROR,
        null
      );
      appCB(null, error);
    } else {
      result =
        result.etc_major + "." + result.etc_minor + "." + result.etc_patch;
      appCB(result, null);
    }
  };

  this.getReaderWithEmiratesId = function (appCallBack) {
    LOG("Toolkit :: getReaderWithEmiratesId() :: >>");
    services.GET_READER_WITH_EID.service_context = service_context;
    services.SendRequest(
      JSON.stringify(services.GET_READER_WITH_EID),
      getReaderWithEmiratesIdCB,
      appCallBack
    );
  };
  var getReaderWithEmiratesIdCB = function (appCallBack, responseEvent) {
    LOG("Toolkit :: getReaderWithEmiratesIdCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      LOG("Toolkit :: getReaderWithEmiratesIdCB() :: 3 : parsor =" + parsor);
      var result = JSON.parse(responseEvent.data);
      LOG(
        "Toolkit :: getReaderWithEmiratesIdCB() :: 1 :: reader name =" +
          result.smartcard_reader
      );
      var readerName = result.smartcard_reader;
      var readerSerialNumber = null;
      if (1 === result.serial_number_status)
        readerSerialNumber = result.reader_serial_number;
      var reader = new CardReader(readerName, readerSerialNumber);
      appCallBack(reader, null);
    } catch (error) {
      LOG("Toolkit :: getReaderWithEmiratesIdCB() :: Error =");
      appCallBack(null, error);
    }
  };
  this.getDeviceId = function (appCallBack) {
    LOG("CardReader :: getDeviceId() :: >>");
    services.GET_DEVICE_ID.service_context = window.service_context;
    var validate = ValidateParams(services.GET_DEVICE_ID, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.GET_DEVICE_ID),
        toolkitDeviceIdCB,
        appCallBack
      );
    }
  };
  this.parseMRZ = function (MRZString, appCallBack) {
    LOG("CardReader :: parseMRZ() :: >>");
    services.PARSEMRZ.service_context = window.service_context;
    services.PARSEMRZ.mrz = MRZString;
    var validate = ValidateParams(services.PARSEMRZ, appCallBack);
    if (validate) {
      var response = services.SendRequest(
        JSON.stringify(services.PARSEMRZ),
        parseMRZCB,
        appCallBack
      );
    }
  };

  var parseMRZCB = function (appCB, responseEvent) {
    LOG("CardReader :: PARSEMRZCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: PARSEMRZCB() :: Error ");
      appCB(null, error);
    }
  };
  var toolkitDeviceIdCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitDeviceIdCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      parsor = JSON.parse(responseEvent.data);
      appCB(parsor.device_id, null);
    } catch (error) {
      LOG("CardReader :: toolkitDeviceIdCB() :: Error ");
      appCB(null, error);
    }
  };
  this.getDataProtectionKey = function (appCallBack) {
    services.DATA_PROTECTION_REQUEST.service_context = window.service_context;
    services.SendRequest(
      JSON.stringify(services.DATA_PROTECTION_REQUEST),
      getDataProtectionKeyCB,
      appCallBack
    );
  };
  var getDataProtectionKeyCB = function (appCB, responseEvent) {
    LOG("CardReader :: getDataProtectionKeyCB() :: >>");
    try {
      var parsor = new DataProtectionKey(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: getDataProtectionKeyCB() :: Error ");
      appCB(null, error);
    }
  };

  this.getLicenseExpiryDate = function (appCallBack) {
    services.LICENSEEXPIRAYDATE.service_context = window.service_context;
    services.SendRequest(
      JSON.stringify(services.LICENSEEXPIRAYDATE),
      getLicenseExpiryDateCB,
      appCallBack
    );
  };
  var getLicenseExpiryDateCB = function (appCB, responseEvent) {
    LOG("getLicenseExpiryDateCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("getLicenseExpiryDateCB() :: Error ");
      appCB(null, error);
    }
  };

  this.getConfigFilesExpiryDates = function (appCallBack) {
    services.configCertExpiryDate.service_context = window.service_context;
    services.SendRequest(
      JSON.stringify(services.configCertExpiryDate),
      getConfigFilesExpiryDatesCB,
      appCallBack
    );
  };
  var getConfigFilesExpiryDatesCB = function (appCB, responseEvent) {
    LOG("getConfigFilesExpiryDatesCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("getConfigFilesExpiryDatesCB() :: Error ");
      appCB(null, error);
    }
  };
  this.getverifyToolkitResponse = function (
    toolkitResponse,
    certDataPath,
    certChainDataPath,
    callBack
  ) {
    services.VerifyToolkitResponse.response = btoa(toolkitResponse);
    services.VerifyToolkitResponse.service_context = window.service_context;
    services.VerifyToolkitResponse.cert_data = null;
    services.VerifyToolkitResponse.chain_data = null;
    services.VerifyToolkitResponse.chain_validation = false;

    if (
      services.VerifyToolkitResponse.cert_data != "" &&
      services.VerifyToolkitResponse.cert_data != null
    ) {
      services.VerifyToolkitResponse.is_valid_cert_data = 1;
    } else {
      services.VerifyToolkitResponse.is_valid_cert_data = 0;
    }

    if (
      services.VerifyToolkitResponse.chain_data != "" &&
      services.VerifyToolkitResponse.chain_data != null
    ) {
      services.VerifyToolkitResponse.chain_validation = 1;
    } else {
      services.VerifyToolkitResponse.chain_validation = 0;
    }

    if (services.VerifyToolkitResponse.cert_data === null) {
      delete services.VerifyToolkitResponse.cert_data;
    }
    if (services.VerifyToolkitResponse.chain_data === null) {
      delete services.VerifyToolkitResponse.chain_data;
    }

    services.SendRequest(
      JSON.stringify(services.VerifyToolkitResponse),
      verifyToolkitResponseCB,
      callBack
    );
  };
  var verifyToolkitResponseCB = function (appCB, responseEvent) {
    LOG("verifyToolkitResponseCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("verifyToolkitResponseCB() :: Error ");
      appCB(null, error);
    }
  };
  this.cleanup = function () {
    LOG("Toolkit :: cleanup() :: >>");
    services.CLEANUP_CONTEXT.service_context = window.service_context;
    services.SendRequest(
      JSON.stringify(services.CLEANUP_CONTEXT),
      services.cleanup,
      this.appOnCloseCB
    );
  };
  try {
    initialize(options.toolkitConfig);
  } catch (error) {
    onErrorCB(error);
  }
}
/**
 * Class ToolkitService
 * This class defines methods and constants used in toolkit service communication
 */
function ToolkitService(onOpenCB, onCloseCB, onErrorCB, options) {
  /* set the call backs */
  this.onOpenCB = onOpenCB;
  this.onCloseCB = onCloseCB;
  this.onErrorCB = onErrorCB;
  this.jnlp_address = options["jnlp_address"];

  var DEFAULT_URLS;
  LOG(
    "ToolkitService :: 1 : options.agent_host_name =" + options.agent_host_name
  );

  /* Use agent host name if provided */
  if (options.agent_tls_enabled) {
    /* default ports for secured communication */
    if (options.agent_host_name != undefined && options.agent_host_name != "") {
      DEFAULT_URLS = [
        options.agent_host_name + ":9004",
        options.agent_host_name + ":9005",
        options.agent_host_name + ":9020",
      ];
    } else {
      DEFAULT_URLS = [
        "toolkitagent.emiratesid.ae:9004",
        "toolkitagent.emiratesid.ae:9005",
        "toolkitagent.emiratesid.ae:9020",
      ];
    }
  } else {
    /* default ports for un-secured communication */
    DEFAULT_URLS = ["127.0.0.1:9004", "127.0.0.1:9005", "127.0.0.1:9020"];
  }
  LOG("ToolkitService :: 2 : DEFAULT_URLS =" + DEFAULT_URLS);
  this.CONFIRM_TEXT_WINDOWS =
    "ICA agent is not running. Please install ICA agent and try again. To install ICA agent click OK.";
  /*     Request format for list reader command */
  this.LIST_READER_REQUEST = {
    cmd: 3,
    service_context: "",
  };
  /*  Request format for connect reader command */
  this.CONNECT_READER = {
    cmd: 4,
    service_context: "",
    smartcard_reader: "",
  };
  /*   Request format for disconnect reader command*/
  this.DISCONNECT_REQUEST = {
    cmd: 5,
    service_context: "",
    card_context: "",
  };
  /*  Request format
     for register device command */
  this.REGISTER_DEVICE = {
    cmd: 35,
    service_context: "",
    user_id: "",
    password: "",
    device_reference_id: "",
  };
  /* Request format to read public data command */
  this.PUBLIC_DATA_REQUEST = {
    cmd: 6,
    service_context: "",
    card_context: "",
    read_photography: "",
    read_non_modifiable_data: "",
    read_modifiable_data: "",
    request_id: "",
    signature_image: "",
    address: "",
  };
  /*  Request format to read family book data command */
  this.FAMILY_BOOK_DATA_REQUEST = {
    cmd: 22,
    service_context: "",
    pin: "",
  };
  /* Request format for read check card status command */
  this.CHECK_CARD_STATUS_REQUEST = {
    cmd: 8,
    service_context: "",
    request_id: "",
    card_context: "",
  };
  /* Request format for get finger index command */
  this.GET_FINGER_INDEX = {
    cmd: 9,
    service_context: "",
    card_context: "",
  };
  /* Request format for verify biometric command */
  this.VERIFY_BIOMETRIC = {
    cmd: 10,
    service_context: "",
    finger_index: "",
    sensor_timeout: "",
    request_id: "",
    card_context: "",
  };
  /* Request format for Pin reset command */
  this.PIN_RESET = {
    cmd: 13,
    service_context: "",
    pin: "",
    finger_index: "",
    sensor_timeout: "",
    ref_data_id: "",
  };
  this.PIN_RESET_WITHOUT_BIO = {
    cmd: 53,
    pin: "",
    service_context: "",
  };
  /* Request format for MatchOnCard command */
  this.MATCH_ON_CARD = {
    cmd: 11,
    service_context: "",
    finger_index: "",
    sensor_timeout: "",
    ref_data_id: "",
    card_context: "",
  };
  /* Request format for reading certificate */
  this.READ_CERTIFICATE = {
    cmd: 7,
    service_context: "",
    card_context: "",
    pin: "",
  };
  /* Request format for PKI Auth command */
  this.AUTHENTICATE_PKI = {
    cmd: 15,
    service_context: "",
    pin: "",
  };
  /* Request format for sign data command */
  this.SIGN_DATA = {
    cmd: 16,
    service_context: "",
    data: "",
    pin: "",
    data_hash: "",
  };
  /*  Request format for sign challenge command */
  this.SIGN_CHALLENGE = {
    cmd: 32,
    card_context: "",
    service_context: "",
    data: "",
    pin: "",
    data_hash: "",
  };
  /*  Request format for verify signature data command */
  this.VERIFY_SIGNATURE = {
    cmd: 17,
    service_context: "",
    data: "",
    cert_data: "",
    signature: "",
    data_hash: "",
  };
  /*  Request format for establish context command */
  this.ESTABLISH_CONTEXT = {
    cmd: 1,
    config_params: "",
  };
  /*  Request format for clean up context command */
  this.CLEANUP_CONTEXT = {
    cmd: 2,
    service_context: "",
  };
  /*  Request format for Unblock PIN command */
  this.UNBLOCK_PIN = {
    cmd: 25,
    service_context: "",
    pin: "",
    finger_index: "",
    ref_data_id: "",
    sensor_timeout: "",
  };
  /* Request format for Card Genuine command */
  this.CARD_GENUINE = {
    cmd: 24,
    request_id: "",
    service_context: "",
    card_context: "",
  };
  /* Request format for Device Id command */
  this.GET_DEVICE_ID = {
    cmd: 38,
    service_context: "",
  };
  this.SIGN_XADES = {
    cmd: 26,
    input_path: "",
    output_path: "",
    signature_level: "",
    packaging_mode: "",
    user_pin: "",
    tsa_url: "",
    ocsp_url: "",
    cert_path: "",
    country_code: "",
    locality: "",
    postal_code: "",
    state_or_province: "",
    street: "",
    service_context: "",
  };
  this.VERIFY_XADES = {
    cmd: 27,
    input_path: "",
    ocsp_url: "",
    cert_path: "",
    report_type: "",
    sign_data: "",
    deattached: "",
    service_context: "",
  };
  this.SIGN_PADES = {
    cmd: 28,
    input_path: "",
    output_path: "",
    signature_level: "",
    packaging_mode: "",
    user_pin: "",
    tsa_url: "",
    ocsp_url: "",
    cert_path: "",
    country_code: "",
    locality: "",
    postal_code: "",
    state_or_province: "",
    street: "",
    sign_reason: "",
    signer_location: "",
    signer_contact_info: "",
    signature_xaxis: "",
    signature_yaxis: "",
    signature_image: "",
    background_color: "",
    font_color: "",
    font_name: "",
    font_size: "",
    signature_text: "",
    sign_visible: "",
    name_position: "",
    page_number: "",
    service_context: "",
  };
  this.VERIFY_PADES = {
    cmd: 29,
    input_path: "",
    ocsp_url: "",
    cert_path: "",
    report_type: "",
    deattached: "",
    service_context: "",
  };
  this.SIGN_CADES = {
    cmd: 30,
    input_path: "",
    signature_level: "",
    packaging_mode: "",
    user_pin: "",
    tsa_url: "",
    ocsp_url: "",
    cert_path: "",
    country_code: "",
    locality: "",
    postal_code: "",
    state_or_province: "",
    street: "",
    service_context: "",
  };
  this.VERIFY_CADES = {
    cmd: 31,
    input_path: "",
    report_type: "",
    ocsp_url: "",
    cert_path: "",
    sign_data: "",
    service_context: "",
    deattached: "",
  };
  this.READ_FAMILY_BOOK = {
    cmd: 22,
    service_context: "",
    pin: "",
  };
  /*  Request format for getting Toolkit Version command */
  this.GET_TOOLKIT_VERSION = {
    cmd: 33,
    service_context: "",
  };
  /* Request format for getting reader name having EID card command */
  this.GET_READER_WITH_EID = {
    cmd: 54,
    service_context: "",
  };
  /* Request  for getting Interface */
  this.GET_INTERFACE = {
    cmd: 19,
    card_context: "",
    service_context: "",
  };
  /*Request for NFC Parmas*/
  this.SET_NFC_PARAMS = {
    cmd: 18,
    card_context: "",
    service_context: "",
    cardnumber: "",
    dob: "",
    expirydate: "",
    mrz: "",
  };
  /*Request for NFC Parmas*/
  /* Request format for Prepare Request command */
  this.PREPARE_REQUEST = {
    cmd: 36,
    card_context: "",
    service_context: "",
    request_id: "",
  };
  /*Request for DataProtection Key */
  this.DATA_PROTECTION_REQUEST = {
    cmd: 44,
    service_context: "",
  };

  this.PARSEMRZ = {
    cmd: 46,
    mrz: "",
    service_context: "",
  };
  this.VERIFY_BIOMETRIC_CARD = {
    cmd: 47,
    service_context: "",
    finger_index: "",
    sensor_timeout: "",
    request_id: "",
    card_context: "",
  };
  this.DATA_EF_TYPE = {
    cmd: 48,
    public_data_ef_type: "",
    service_context: "",
    card_context: "",
  };
  this.PARSE_EF_DATA = {
    cmd: 55,
    ef_data: "",
  };
  this.CSN = {
    cmd: 20,
    card_context: "",
    service_context: "",
  };
  this.LICENSEEXPIRAYDATE = {
    cmd: 49,
    service_context: "",
  };
  this.READDATA = {
    cmd: 52,
    card_context: "",
    service_context: "",
    request_id: "",
    file_type: "",
  };
  this.UPDATEDATA = {
    cmd: 50,
    card_context: "",
    service_context: "",
    request_id: "",
    file_type: "",
  };

  this.configCertExpiryDate = {
    cmd: 51,
    service_context: "",
  };

  this.VerifyToolkitResponse = {
    cmd: 45,
    response: "",
    cert_data: "",
    chain_data: "",
    is_valid_cert_data: "",
    chain_validation: "",
  };

  var webSocket = null;
  var isWSConnected = false;
  var initializingWsIndex = -1;
  var wsUrl = "";
  var webSocketProtocol = "eida-toolkit";
  this.readerContext = null;
  this.onMessageCB = null;
  var self = this;
  var callbackParams = {
    cmd: "",
    sequence: "",
    appCallBack: null,
    toolkitCB: null,
  };
  var sequenceCounter = 0;
  var isRequestPending = false;
  /**
   * This function is to download agent by using web start. Agent will be
   * downloaded only for the windows machines.
   */
  var downloadAgent = function () {
    LOG("ToolkitService :: downloadAgent() :: >>");
    /*  get the device type */
    var deviceType = checkDeviceType();
    LOG("ToolkitService :: downloadAgent() :: 1 :: deviceType =" + deviceType);
    /*
     * If device is a windows machine then send a request to download agent
     * service by using web start
     */
    if ("Windows" === deviceType) {
      hideLoader();
      var result = confirm(self.CONFIRM_TEXT_WINDOWS);
      if (true == result) {
        displayProgress(
          "Agent is not running, web socket initializaion failed, run downloaded JNLP file ..."
        );
        displayProgress("After agent starts, refresh and initialize ...");
        window.location.href = self.jnlp_address;
      } else {
        /* execute the error call back */
        displayProgress("You have canceled to download agent ...");
        self.onErrorCB("Web socket connection failed.");
      }
    }
    /*
     * If device is a Linux machine then send a request to download agent
     * service by using web start
     */
    if ("Linux" === deviceType) {
      hideLoader();
      var result = confirm(self.CONFIRM_TEXT_WINDOWS);
      if (true == result) {
        displayProgress(
          "Agent is not running, web socket initializaion failed, run downloaded JNLP file ..."
        );
        displayProgress("After agent starts, refresh and initialize ...");
        window.location.href = self.jnlp_address;
      } else {
        /* execute the error call back */
        displayProgress("You have canceled to download agent ...");
        self.onErrorCB("Web socket connection failed.");
      }
    }
    /*
     * If device is a iOS machine then send a request to download agent
     * service by using web start
     */
    if ("iOS" === deviceType) {
      hideLoader();
      var result = confirm(self.CONFIRM_TEXT_WINDOWS);
      if (true == result) {
        displayProgress(
          "Agent is not running, web socket initializaion failed, run downloaded JNLP file ..."
        );
        displayProgress("After agent starts, refresh and initialize ...");
        window.location.href = self.jnlp_address;
      } else {
        /* execute the error call back */
        displayProgress("You have canceled to download agent ...");
        self.onErrorCB("Web socket connection failed.");
      }
    }
    LOG(
      "ToolkitService :: downloadAgent() :: 2 :: Failed to connect to service.."
    );
    return "-1";
  };
  /**
   * This method is to send request to server
   *
   * @param request
   * request to send to server
   */
  this.SendRequest = function (request, toolkitListReaderCB, appCallBack) {
    LOG("ToolkitService :: SendRequest() :: >>");
    LOG(
      "ToolkitService :: SendRequest() :: 1 :: isRequestPending =" +
        isRequestPending
    );
    if (!isRequestPending) {
      /*  return if webSocket connection is not opened. */
      if (
        webSocket === undefined ||
        webSocket.readyState === WebSocket.CLOSED
      ) {
        return "webSocket connection is not open";
      }
      /* send the message only if webSocket connection is open */
      if (webSocket.readyState === WebSocket.OPEN) {
        /**
         * Assign callBack to onMessageCB object so that it can be
         * called by onMessage handler once response is received from
         * server.
         */
        request = JSON.parse(request);
        sequenceCounter = sequenceCounter + 1;
        request.sequence = sequenceCounter;
        callbackParams.cmd = request.cmd;
        callbackParams.sequence = request.sequence;
        callbackParams.appCallBack = appCallBack;
        callbackParams.toolkitCB = toolkitListReaderCB;
        request = JSON.stringify(request);
        LOG("ToolkitService :: SendRequest() :: 2 :: request =" + request);
        isRequestPending = true;
        /*  send the request to server */
        webSocket.send(request);
        return "";
      }
      var error = new ToolkitException(
        ErrorCodes.SERVICE_COMMUNICATION_ERROR,
        "Service communication failed..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
      appCallBack(null, error);
    } else {
      var error = new ToolkitException(
        ErrorCodes.SERVICE_BUSY,
        "Preivious Request is already in progress..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
      appCallBack(null, error);
    }
  };
  /**
   * find the device type by checking userAgent
   */
  var checkDeviceType = function () {
    var ua = navigator.userAgent;
    LOG("s ua =" + ua);
    if (ua.match(/(iPhone|iPod|iPad)/)) return "iPhone";

    if (ua.match(/BlackBerry/)) return "BlackBerry";

    if (ua.match(/Android/)) return "Android";

    if (ua.match(/Windows/)) return "Windows";

    if (ua.match(/Linux/)) return "Linux";
  }; /*  checkDeviceType() */
  /**
   * This function initializes the new web socket connection only if
   * connection is not already initialized. Defines web socket listener
   * methods.
   */
  var initializeWS = function () {
    try {
      LOG("ToolkitService :: initializeWS() :: >>");
      LOG(
        "ToolkitService :: initializeWS() :: 1 :: trying to connect toolkit service on url =" +
          wsUrl
      );
      /*  Ensures only one connection is open at a time */
      if (
        webSocket !== null &&
        webSocket !== undefined &&
        webSocket.readyState !== WebSocket.OPEN &&
        webSocket.readyState == WebSocket.OPEN
      ) {
        LOG(
          "ToolkitService :: initializeWS() :: 2 :: WebSocket is already active..."
        );
        return "WebSocket is already active...";
      }
      /* Create a new instance of the webSocket */
      /** secure is assigned to url  --vishal*/
      webSocket = new WebSocket(secure + wsUrl, webSocketProtocol);
      /* onOpen listener used when connection is established with server */
      webSocket.onopen = function (event) {
        LOG(
          "ToolkitService :: initializeWS() :: 3 :: WebSocket connected....."
        );

        /*  set flag to 'true' as web socket is connected and call the onOpen callback*/
        isWSConnected = true;
        self.onOpenCB(event);
      };
      /*  onMessage listener to handle request received from server */
      webSocket.onmessage = function (event) {
        LOG("ToolkitService :: initializeWS() :: onmessage() :: >>");
        /**
         * Execute the on message callback by passing the response
         * received from server
         */
        processResponse(event);
      };
      /*  onClose listener to handle connection closed event */
      webSocket.onclose = function (event) {
        LOG("ToolkitService :: initializeWS() :: onclose() :: >>");
        LOG(
          "ToolkitService :: initializeWS() :: onclose() :: 1 :: isWSConnected =" +
            isWSConnected
        );
        if (false == isWSConnected && 1006 == event.code) {
          self.establishConnection();
          return;
        }
        /*  invoke call back only it is available */
        if (
          true == isWSConnected &&
          null !== self.onCloseCB &&
          undefined !== self.onCloseCB
        ) {
          LOG("ToolkitService :: initializeWS() :: onclose() :: 2 ");
          /* reset all objects */
          self.readerContext = null;
          self.webSocket = null;
          self.onMessageCB = null;
          self.onErrorCB = null;
          self.onOpenCB = null;
          isWSConnected = false;
          initializingWsIndex = -1;
          wsUrl = "";
          /**
           * Execute the on close callback.
           */
          self.onCloseCB(event);
          self.onCloseCB = null;
        }
      };
      /* onError listener to handle any errors in the communication*/
      webSocket.onerror = function (event) {
        LOG("ToolkitService :: initializeWS() :: onerror() :: >> ");
        LOG(
          "ToolkitService :: initializeWS() :: onerror() :: 1 :: isWSConnected =" +
            isWSConnected
        );
        /* invoke call back only it is available */
        if (
          null !== self.onErrorCB &&
          undefined !== self.onErrorCB &&
          true == isWSConnected
        ) {
          /**
           * Execute the on error callback.
           */
          self.onErrorCB("Error in web socket connection..clossing web socket");
        }
      };
    } catch (e) {
      return "Webcomponent Initialization Failed, Details: " + e;
    }
    return "";
  };
  this.cleanup = function (appCallBack, responseEvent) {
    LOG("ToolkitService :: cleanup() >>");

    if (
      webSocket != null ||
      webSocket != undefined ||
      webSocket.readyState != WebSocket.CLOSED
    ) {
      webSocket.close();
    }
  };
  this.establishConnection = function () {
    LOG("ToolkitService :: establishConnection() >>");
    /**
     * set initializing flag to 'false'. This flag is used while attempting
     * to establish web socket connection on set of ports. Once web socket
     * connection is established, this flag will be set to 'true' in onOpen
     * handler.
     */
    isWSConnected = false;
    /*increment index by 1*/
    initializingWsIndex = initializingWsIndex + 1;
    wsUrl = DEFAULT_URLS[initializingWsIndex];
    LOG("s establishConnection() :: wsUrl =" + wsUrl);
    /**
     * wsUrl will be undefined when all the WS urls from predefined set of
     * WS urls are checked for connection and not able to connect to any WS
     * urls. Send request request to download toolkit agent as service is
     * not installed.
     */
    if (undefined == wsUrl) {
      initializingWsIndex = -1;
      LOG(
        "ToolkitService :: establishConnection() :: 1 :: Web socket connection failed ..."
      );
      downloadAgent();
      return "";
    }
    LOG("ToolkitService :: establishConnection() :: 2 ");
    var ret = initializeWS();
  };

  var processResponse = function (event) {
    LOG("ToolkitService :: processResponse() :: >>");
    LOG("ToolkitService :: processResponse() 1 ::" + event.data);
    var result = JSON.parse(event.data);
    LOG(
      "ToolkitService :: processResponse() :: 2 :: sequence id =" +
        result.sequence +
        " : callbackParams.sequence =" +
        callbackParams.sequence
    );
    isRequestPending = false;
    if (callbackParams.sequence == result.sequence) {
      if (undefined !== callbackParams.toolkitCB) {
        callbackParams.toolkitCB(callbackParams.appCallBack, event);
      }
    }
  };
}

function CardReader(readerName, readerSerialNumber) {
  this.readerName = readerName;
  this.readerSerialNumber = readerSerialNumber;
  readerContext = null;
  var connected = false;
  this.connect = function (appCallBack) {
    LOG("CardReader :: connect() :: >>");
    services.CONNECT_READER.smartcard_reader = this.readerName;
    services.CONNECT_READER.service_context = service_context;
    services.SendRequest(
      JSON.stringify(services.CONNECT_READER),
      toolkitConnectCB,
      appCallBack
    );
  };

  this.getReaderName = function () {
    return this.readerName;
  };

  this.getReaderSerialNumber = function () {
    return this.readerSerialNumber;
  };

  this.readPublicData = function (
    requestId,
    readNonModifiableData,
    readModifiableData,
    readPhotography,
    readSignatureImage,
    readAddress,
    appCallBack
  ) {
    LOG("CardReader :: readPublicData() :: >>");
    LOG("CardReader :: readPublicData() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send PUBLIC_DATA_REQUEST by specifying parameters	 */
    services.PUBLIC_DATA_REQUEST.service_context = window.service_context;
    services.PUBLIC_DATA_REQUEST.card_context = readerContext;
    services.PUBLIC_DATA_REQUEST.read_photography = readPhotography;
    services.PUBLIC_DATA_REQUEST.read_non_modifiable_data =
      readNonModifiableData;
    services.PUBLIC_DATA_REQUEST.read_modifiable_data = readModifiableData;
    services.PUBLIC_DATA_REQUEST.request_id = requestId;
    services.PUBLIC_DATA_REQUEST.signature_image = readSignatureImage;
    services.PUBLIC_DATA_REQUEST.address = readAddress;
    var validate = ValidateParams(services.PUBLIC_DATA_REQUEST, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.PUBLIC_DATA_REQUEST),
        toolkitPubDataCB,
        appCallBack
      );
    }
  };
  /**
   * This function is used to read public data from a reader having specified readerContext.
   * This function sends a read public data request to the server and executes
   * the callBack function once response is received from server.
   *
   *
   * @param readerContext reader context to read data from
   * @param refresh if true reads data from card else returns cached data
   * @param readPhotography if true then reads photo data
   * @param readNonModifiableData if true then reads non modifiable data
   * @param readModifiableData if true then reads modifiable data
   * @param signatureValidation if true then reads signature image data
   * @param callBack callBack function to be executed after response is received
   *  from server.
   *
   * Executes onErrorCB callback if any error occurred during communication
   * with server
   *
   */
  this.readFamilyBookData = function (encodedPin, appCallBack) {
    LOG("CardReader :: readFamilyBookData() :: >>");
    LOG("CardReader :: readFamilyBookData() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send FAMILY_BOOK_DATA_REQUEST by specifying parameters	 */
    services.FAMILY_BOOK_DATA_REQUEST.service_context = window.service_context;
    services.FAMILY_BOOK_DATA_REQUEST.pin = encodedPin;
    var validate = ValidateParams(
      services.FAMILY_BOOK_DATA_REQUEST,
      appCallBack
    );
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.FAMILY_BOOK_DATA_REQUEST),
        toolkitFamilyBookCB,
        appCallBack
      );
    }
  };
  var toolkitFamilyBookCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitFamilyBookCB() :: >>");
    try {
      var parsor = new CardFamilyBookData(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitFamilyBookCB() :: Error ");
      appCB(null, error);
    }
  };
  this.getInterfaceType = function (appCallBack) {
    LOG("CardReader :: getInterfaceType() :: >>");
    LOG("CardReader :: getInterfaceType() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send FAMILY_BOOK_DATA_REQUEST by specifying parameters	 */
    services.GET_INTERFACE.service_context = window.service_context;
    services.GET_INTERFACE.card_context = window.readerContext;
    var validate = ValidateParams(services.GET_INTERFACE, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.GET_INTERFACE),
        toolkitgetInterfaceTypeCB,
        appCallBack
      );
    }
  };
  var toolkitgetInterfaceTypeCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitInterfaceCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      parsor = JSON.parse(responseEvent.data);
      appCB(parsor.interface_type, null);

      DisplayPublicData(false);
    } catch (error) {
      LOG("CardReader :: toolkitInterfaceCB() :: Error ");
      appCB(null, error);
    }
  };
  this.getPkiCertificates = function (encodedPin, appCallBack) {
    LOG("CardReader :: getPkiCertificates() :: >>");
    LOG("CardReader :: getPkiCertificates() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send READ_CERTIFICATE by specifying parameters */
    services.READ_CERTIFICATE.service_context = window.service_context;
    services.READ_CERTIFICATE.card_context = readerContext;
    services.READ_CERTIFICATE.pin = encodedPin;
    var validate = ValidateParams(services.READ_CERTIFICATE, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.READ_CERTIFICATE),
        toolkitReadCertCB,
        appCallBack
      );
    }
  };
  var toolkitReadCertCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitReadCertCB() :: >>");
    try {
      var certificates = new CardCertificates(responseEvent);
      appCB(certificates, null);
    } catch (error) {
      LOG("CardReader :: toolkitReadCertCB() :: Error ");
      appCB(null, error);
    }
  };
  this.checkCardStatus = function (requestId, appCallBack) {
    LOG("CardReader :: checkCardStatus() :: >>");
    LOG("CardReader :: checkCardStatus() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*   send CHECK_CARD_STATUS_REQUEST by specifying parameters	 */
    services.CHECK_CARD_STATUS_REQUEST.card_context = readerContext;
    services.CHECK_CARD_STATUS_REQUEST.service_context = window.service_context;
    services.CHECK_CARD_STATUS_REQUEST.request_id = requestId;
    var validate = ValidateParams(
      services.CHECK_CARD_STATUS_REQUEST,
      appCallBack
    );
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.CHECK_CARD_STATUS_REQUEST),
        toolkitCardStatusCB,
        appCallBack
      );
    }
  };
  var toolkitCardStatusCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitCardStatusCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitCardStatusCB() :: Error ");
      appCB(null, error);
    }
  };
  this.getFingerData = function (appCallBack) {
    LOG("CardReader :: getFingerData() :: >>");
    LOG("CardReader :: getFingerData() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.GET_FINGER_INDEX.service_context = window.service_context;
    services.GET_FINGER_INDEX.card_context = readerContext;
    services.SendRequest(
      JSON.stringify(services.GET_FINGER_INDEX),
      toolkitFingerIndexCB,
      appCallBack
    );
  };
  var toolkitFingerIndexCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitFingerIndexCB() :: >>");
    var result = JSON.parse(responseEvent.data);
    try {
      var error = null;
      if ("fail" === result.status) {
        error = new ToolkitException(
          result.error_code,
          result.error_message,
          ExceptionType.TOOLKIT_ERROR,
          null
        );
        throw error;
      }
      if (
        null == result.first_finger_id ||
        undefined == result.first_finger_id ||
        null == result.first_finger_index ||
        undefined == result.first_finger_index ||
        null == result.second_finger_id ||
        undefined == result.second_finger_id ||
        null == result.second_finger_index ||
        undefined == result.second_finger_index
      ) {
        error = new ToolkitException(
          ErrorCodes.INVALID_TOOLKIT_RESPONSE_XML,
          "Invalid Toolkit Response XML Format. Element not found : Finger Data",
          ExceptionType.TOOLKIT_ERROR,
          null
        );
        throw error;
      }
      var fingerDataArray = [];
      var fingerObj = new FingerData(
        result.first_finger_id,
        result.first_finger_index
      );
      fingerDataArray.push(fingerObj);
      fingerObj = new FingerData(
        result.second_finger_id,
        result.second_finger_index
      );
      fingerDataArray.push(fingerObj);
      appCB(fingerDataArray, null);
    } catch (error) {
      LOG("CardReader :: toolkitFingerIndexCB() :: Error ");
      appCB(null, error);
    }
  };
  this.authenticateBiometricOnServer = function (
    requestId,
    fingerIndex,
    sensorTimeout,
    appCallBack
  ) {
    LOG("CardReader :: authenticateBiometricOnServer() :: >>");
    LOG(
      "CardReader :: authenticateBiometricOnServer() :: 1 :: connected =" +
        connected
    );
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send VERIFY_BIOMETRIC by specifying parameters */
    services.VERIFY_BIOMETRIC.service_context = window.service_context;
    services.VERIFY_BIOMETRIC.finger_index = self.FINGER_INDEXS[fingerIndex];
    services.VERIFY_BIOMETRIC.request_id = requestId;
    services.VERIFY_BIOMETRIC.sensor_timeout = sensorTimeout;
    services.VERIFY_BIOMETRIC.card_context = readerContext;
    var validate = ValidateParams(services.VERIFY_BIOMETRIC, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.VERIFY_BIOMETRIC),
        toolkitVerifyBioCB,
        appCallBack
      );
    }
  };
  var toolkitVerifyBioCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitVerifyBioCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitVerifyBioCB() :: Error ");
      appCB(null, error);
    }
  };
  this.authenticatePki = function (encodedPin, appCallBack) {
    LOG("CardReader :: authenticatePki() :: >>");
    LOG("CardReader :: authenticatePki() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.AUTHENTICATE_PKI.service_context = window.service_context;
    services.AUTHENTICATE_PKI.pin = encodedPin;
    var validate = ValidateParams(services.AUTHENTICATE_PKI, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.AUTHENTICATE_PKI),
        toolkitAuthPkiCB,
        appCallBack
      );
    }
  };
  var toolkitAuthPkiCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitAuthPkiCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitAuthPkiCB() :: Error ");
      appCB(null, error);
    }
  };
  this.signData = function (input, isInputHash, encodedPin, appCallBack) {
    LOG("CardReader :: signData() :: >>");
    LOG("CardReader :: signData() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send SIGN_DATA by specifying parameters */
    services.SIGN_DATA.service_context = window.service_context;
    services.SIGN_DATA.pin = encodedPin;
    services.SIGN_DATA.data = btoa(input);
    services.SIGN_DATA.data_hash = isInputHash;
    var validate = ValidateParams(services.SIGN_DATA, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.SIGN_DATA),
        toolkitSignDataCB,
        appCallBack
      );
    }
  };
  var toolkitSignDataCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitSignDataCB() :: >>");
    try {
      var parsor = new SignatureResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitSignDataCB() :: Error ");
      appCB(null, error);
    }
  };
  this.verifySignature = function (
    input,
    isInputHash,
    signature,
    certificate,
    appCallBack
  ) {
    LOG("CardReader :: verifySignature() :: >>");
    LOG("CardReader :: verifySignature() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send VERIFY_SIGNATURE by specifying parameters */
    services.VERIFY_SIGNATURE.service_context = window.service_context;
    services.VERIFY_SIGNATURE.cert_data = certificate;
    services.VERIFY_SIGNATURE.data = btoa(input);
    services.VERIFY_SIGNATURE.data_hash = isInputHash;
    services.VERIFY_SIGNATURE.signature = signature;
    var validate = ValidateParams(services.VERIFY_SIGNATURE, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.VERIFY_SIGNATURE),
        toolkitVerifySignDataCB,
        appCallBack
      );
    }
  };
  var toolkitVerifySignDataCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitVerifySignDataCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor.status, null);
    } catch (error) {
      LOG("CardReader :: toolkitVerifySignDataCB() :: Error ");
      appCB(null, error);
    }
  };
  this.isCardGenuine = function (requestId, appCallBack) {
    LOG("CardReader :: isCardGenuine() :: >>");
    LOG("CardReader :: isCardGenuine() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send CARD_GENUINE by specifying parameters */
    services.CARD_GENUINE.service_context = window.service_context;
    services.CARD_GENUINE.request_id = requestId;
    services.CARD_GENUINE.card_context = readerContext;
    services.SendRequest(
      JSON.stringify(services.CARD_GENUINE),
      toolkitCardGenineCB,
      appCallBack
    );
  };
  var toolkitCardGenineCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitCardGenineCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitCardGenineCB() :: Error ");
      appCB(null, error);
    }
  };
  this.matchOnCard = function (
    requestId,
    fingerData,
    sensorTimeout,
    appCallBack
  ) {
    LOG("CardReader :: matchOnCard() :: >>");
    LOG("CardReader :: matchOnCard() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send MATCH_ON_CARD by specifying parameters */
    services.MATCH_ON_CARD.service_context = window.service_context;
    services.MATCH_ON_CARD.sensor_timeout = sensorTimeout;
    services.MATCH_ON_CARD.finger_index = parseInt(fingerData.getIndex());
    services.MATCH_ON_CARD.ref_data_id = fingerData.fingerId;
    services.MATCH_ON_CARD.card_context = readerContext;
    services.MATCH_ON_CARD.request_id = requestId;
    services.SendRequest(
      JSON.stringify(services.MATCH_ON_CARD),
      matchOnCardCB,
      appCallBack
    );
  };
  var matchOnCardCB = function (appCB, responseEvent) {
    LOG("CardReader :: matchOnCardCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: matchOnCardCB() :: Error ");
      appCB(null, error);
    }
  };
  this.unblockPin = function (
    encodedPin,
    fingerData,
    sensorTimeout,
    appCallBack
  ) {
    LOG("CardReader :: unblockPin() :: >>");
    LOG("CardReader :: unblockPin() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send CARD_GENUINE by specifying parameters */
    services.UNBLOCK_PIN.service_context = window.service_context;
    services.UNBLOCK_PIN.pin = encodedPin;
    services.UNBLOCK_PIN.sensor_timeout = sensorTimeout;
    services.UNBLOCK_PIN.finger_index = parseInt(fingerData.getIndex());
    services.UNBLOCK_PIN.ref_data_id = fingerData.fingerId;
    var validate = ValidateParams(services.UNBLOCK_PIN, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.UNBLOCK_PIN),
        toolkitUnblockPinCB,
        appCallBack
      );
    }
  };
  var toolkitUnblockPinCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitUnblockPinCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitUnblockPinCB() :: Error ");
      appCB(null, error);
    }
  };
  this.xadesSign = function (
    signingContext,
    xmlFilePath,
    signedXmlFilePath,
    appCallBack
  ) {
    LOG("CardReader :: xadesSign() :: >>");
    LOG("CardReader :: xadesSign() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send CARD_GENUINE by specifying parameters */
    services.SIGN_XADES.input_path = btoa(xmlFilePath);
    services.SIGN_XADES.output_path = btoa(signedXmlFilePath);
    services.SIGN_XADES.signature_level = parseInt(
      signingContext.signatureLevel
    );
    services.SIGN_XADES.packaging_mode = parseInt(signingContext.packagingMode);
    services.SIGN_XADES.user_pin = signingContext.userPin;
    services.SIGN_XADES.tsa_url = btoa(signingContext.tsaUrl);
    services.SIGN_XADES.ocsp_url = btoa(signingContext.ocspUrl);
    services.SIGN_XADES.cert_path = btoa(signingContext.certPath);
    services.SIGN_XADES.country_code = signingContext.countryCode;
    services.SIGN_XADES.locality = signingContext.locality;
    services.SIGN_XADES.postal_code = signingContext.postalCode;
    services.SIGN_XADES.state_or_province = signingContext.stateOrProvince;
    services.SIGN_XADES.street = signingContext.street;
    services.SIGN_XADES.service_context = window.service_context;
    if (services.SIGN_XADES.packaging_mode != 3) {
      var validate = ValidateParams(services.SIGN_XADES, appCallBack);
    } else {
      validate = true;
    }
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.SIGN_XADES),
        toolkitXadesSignCB,
        appCallBack
      );
    }
  };
  var toolkitXadesSignCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitXadesSignCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      parsor = JSON.parse(responseEvent.data);
      if (parsor.sign_data === null || parsor.sign_data === undefined) {
        parsor.sign_data = "Success";
      }
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitXadesSignCB() :: Error ");
      appCB(null, error);
    }
  };
  this.xadesVerify = function (
    verificationContext,
    signedXmlFilePath,
    signature,
    appCallBack
  ) {
    LOG("CardReader :: xadesVerify() :: >>");
    LOG("CardReader :: xadesVerify() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }

    services.VERIFY_XADES.service_context = window.service_context;
    services.VERIFY_XADES.input_path = btoa(signedXmlFilePath);
    services.VERIFY_XADES.ocsp_url = btoa(verificationContext.ocspPath);
    services.VERIFY_XADES.cert_path = btoa(verificationContext.certPath);
    services.VERIFY_XADES.sign_data = signature;
    services.VERIFY_XADES.deattached = verificationContext.detachedValue;
    services.VERIFY_XADES.report_type = parseInt(
      verificationContext.report_type
    );
    if (verificationContext.detachedValue == 0) {
      var validate = true;
    } else {
      var validate = ValidateParams(services.VERIFY_XADES, appCallBack);
    }
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.VERIFY_XADES),
        toolkitXadesVerifyCB,
        appCallBack
      );
    }
  };

  var toolkitXadesVerifyCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitXadesVerifyCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      parsor = JSON.parse(responseEvent.data);
      if (
        parsor.verification_report === null ||
        parsor.verification_report === undefined
      ) {
        var error = {
          message: "Verification report is empty",
        };
        throw error;
      }
      parsor.verification_report = atob(parsor.verification_report);
      appCB(parsor.verification_report, null);
    } catch (error) {
      LOG("CardReader :: toolkitXadesVerifyCB() :: Error ");
      appCB(null, error);
    }
  };
  this.padesSign = function (
    signingContext,
    pdfFilePath,
    signedPdfFilePath,
    appCallBack
  ) {
    LOG("CardReader :: padesSign() :: >>");
    LOG("CardReader :: padesSign() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*   send CARD_GENUINE by specifying parameters */
    services.SIGN_PADES.service_context = window.service_context;
    services.SIGN_PADES.input_path = btoa(pdfFilePath);
    services.SIGN_PADES.output_path = btoa(signedPdfFilePath);
    services.SIGN_PADES.signature_level = parseInt(
      signingContext.signatureLevel
    );
    services.SIGN_PADES.packaging_mode = parseInt(signingContext.packagingMode);
    services.SIGN_PADES.user_pin = signingContext.userPin;
    services.SIGN_PADES.tsa_url = btoa(signingContext.tsaUrl);
    services.SIGN_PADES.ocsp_url = btoa(signingContext.ocspUrl);
    services.SIGN_PADES.cert_path = btoa(signingContext.certPath);
    services.SIGN_PADES.country_code = signingContext.countryCode;
    services.SIGN_PADES.locality = signingContext.locality;
    services.SIGN_PADES.postal_code = signingContext.postalCode;
    services.SIGN_PADES.state_or_province = signingContext.stateOrProvince;
    services.SIGN_PADES.street = signingContext.street;
    services.SIGN_PADES.name_position = parseInt(
      signingContext.signNmPositionSelect
    );
    services.SIGN_PADES.sign_visible = parseInt(
      signingContext.sigVisibleSelect
    );
    services.SIGN_PADES.page_number = parseInt(signingContext.pgNumberTxtBx);
    services.SIGN_PADES.signature_text = signingContext.sigTextTxtBx;
    services.SIGN_PADES.font_size = parseInt(signingContext.fontSizeTxtBx);
    services.SIGN_PADES.font_color = signingContext.fontColorTxtBx;
    services.SIGN_PADES.font_name = signingContext.fontNameTxtBx;
    services.SIGN_PADES.background_color = signingContext.bgColorTxtBx;
    services.SIGN_PADES.signature_image = btoa(signingContext.sigImgPathTxtBx);
    services.SIGN_PADES.signature_yaxis = parseInt(
      signingContext.sigYaxisTxtBx
    );
    services.SIGN_PADES.signature_xaxis = parseInt(
      signingContext.sigXaxisTxtBx
    );
    services.SIGN_PADES.signer_contact_info =
      signingContext.signerContactInfoTxtBx;
    services.SIGN_PADES.signer_location = signingContext.signerLocationTxtBx;
    services.SIGN_PADES.sign_reason = signingContext.reasonSignTxtBx;
    var validate = ValidateParams(services.SIGN_PADES, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.SIGN_PADES),
        toolkitPadesSignCB,
        appCallBack
      );
    }
  };

  var toolkitPadesSignCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitPadesSignCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      var parsor = JSON.parse(responseEvent.data);

      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitPadesSignCB() :: Error ");
      appCB(null, error);
    }
  };
  this.padesVerify = function (
    verificationContext,
    signedPdfFilePath,
    appCallBack
  ) {
    LOG("CardReader :: padesVerify() :: >>");
    LOG("CardReader :: padesVerify() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.VERIFY_PADES.service_context = window.service_context;
    services.VERIFY_PADES.input_path = btoa(signedPdfFilePath);
    services.VERIFY_PADES.ocsp_url = btoa(verificationContext.ocspPath);
    services.VERIFY_PADES.cert_path = btoa(verificationContext.certPath);
    services.VERIFY_PADES.deattached = verificationContext.detachedValue;
    services.VERIFY_PADES.report_type = parseInt(
      verificationContext.report_type
    );
    var validate = ValidateParams(services.VERIFY_PADES, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.VERIFY_PADES),
        toolkitPadesVerifyCB,
        appCallBack
      );
    }
  };

  var toolkitPadesVerifyCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitPadesVerifyCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      parsor = JSON.parse(responseEvent.data);
      if (
        parsor.verification_report === null ||
        parsor.verification_report === undefined
      ) {
        var error = {
          message: "Verification report is empty",
        };
        throw error;
      }
      parsor.verification_report = atob(parsor.verification_report);
      appCB(parsor.verification_report, null);
    } catch (error) {
      LOG("CardReader :: toolkitPadesVerifyCB() :: Error ");
      appCB(null, error);
    }
  };
  this.cadesSign = function (signingContext, inputFilePath, appCallback) {
    LOG("CardReader :: cadesSign() :: >>");
    LOG("CardReader :: cadesSign() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.SIGN_CADES.input_path = btoa(inputFilePath);
    services.SIGN_CADES.signature_level = parseInt(
      signingContext.signatureLevel
    );
    services.SIGN_CADES.packaging_mode = parseInt(signingContext.packagingMode);
    services.SIGN_CADES.user_pin = signingContext.userPin;
    services.SIGN_CADES.tsa_url = btoa(signingContext.tsaUrl);
    services.SIGN_CADES.ocsp_url = btoa(signingContext.ocspUrl);
    services.SIGN_CADES.cert_path = btoa(signingContext.certPath);
    services.SIGN_CADES.country_code = signingContext.countryCode;
    services.SIGN_CADES.locality = signingContext.locality;
    services.SIGN_CADES.postal_code = signingContext.postalCode;
    services.SIGN_CADES.state_or_province = signingContext.stateOrProvince;
    services.SIGN_CADES.street = signingContext.street;
    services.SIGN_CADES.service_context = window.service_context;
    var validate = ValidateParams(services.SIGN_CADES, appCallback);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.SIGN_CADES),
        toolkitCadesSignCB,
        appCallback
      );
    }
  };
  var toolkitCadesSignCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitCadesSignCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      var parsor = JSON.parse(responseEvent.data);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitCadesSignCB() :: Error ");
      appCB(null, error);
    }
  };
  this.cadesVerify = function (
    verificationContext,
    inputFilePath,
    signature,
    appCallback
  ) {
    LOG("CardReader :: cadesVerify() :: >>");
    LOG("CardReader :: cadesVerify() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.VERIFY_CADES.service_context = window.service_context;
    services.VERIFY_CADES.input_path = btoa(inputFilePath);
    services.VERIFY_CADES.ocsp_url = btoa(verificationContext.ocspPath);
    services.VERIFY_CADES.cert_path = btoa(verificationContext.certPath);
    services.VERIFY_CADES.sign_data = signature;
    services.VERIFY_CADES.report_type = parseInt(
      verificationContext.report_type
    );
    services.VERIFY_CADES.deattached = 1;
    var validate = ValidateParams(services.VERIFY_CADES, appCallback);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.VERIFY_CADES),
        toolkitCadesVerifyCB,
        appCallback
      );
    }
  };
  var toolkitCadesVerifyCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitCadesVerifyCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      parsor = JSON.parse(responseEvent.data);
      if (
        parsor.verification_report === null ||
        parsor.verification_report === undefined
      ) {
        var error = {
          message: "Verification report is empty",
        };
        throw error;
      }
      parsor.verification_report = atob(parsor.verification_report);
      appCB(parsor.verification_report, null);
    } catch (error) {
      LOG("CardReader :: toolkitCadesVerifyCB() :: Error ");
      appCB(null, error);
    }
  };
  this.signChallenge = function (input, isInputHash, encodedPin, appCallBack) {
    LOG("CardReader :: signChallenge() :: >>");
    LOG("CardReader :: signChallenge() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send SIGN_DATA by specifying parameters */
    services.SIGN_CHALLENGE.service_context = window.service_context;
    services.SIGN_CHALLENGE.pin = encodedPin;
    services.SIGN_CHALLENGE.data = btoa(input);
    services.SIGN_CHALLENGE.card_context = readerContext;
    services.SIGN_CHALLENGE.data_hash = isInputHash;
    var validate = ValidateParams(services.SIGN_CHALLENGE, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.SIGN_CHALLENGE),
        toolkitSignChallengeCB,
        appCallBack
      );
    }
  };
  var toolkitSignChallengeCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitSignChallengeCB() :: >>");
    try {
      var parsor = new SignatureResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitSignChallengeCB() :: Error ");
      appCB(null, error);
    }
  };
  this.disconnect = function (appCallback) {
    LOG("CardReader :: disconnect() :: >>");
    LOG("CardReader :: disconnect() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    if (readerContext === null) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.DISCONNECT_REQUEST.service_context = window.service_context;
    services.DISCONNECT_REQUEST.card_context = readerContext;
    services.SendRequest(
      JSON.stringify(services.DISCONNECT_REQUEST),
      disconnectCB,
      appCallback
    );
  };
  var disconnectCB = function (appCB, response) {
    LOG("CardReader :: disconnectCB() :: >>");
    try {
      var parsor = new ToolkitResponse(response);
      appCB("success", null);
    } catch (error) {
      LOG("CardReader :: disconnectCB() :: Error ");
      appCB(null, error);
    }
  };
  this.isConnected = function () {
    return connected;
  };
  var toolkitConnectCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitConnectCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      var result = JSON.parse(responseEvent.data);
      readerContext = result.card_context;
      connected = true;
      appCB("success", null);
    } catch (error) {
      LOG("CardReader :: toolkitConnectCB() :: Error ");
      appCB(null, error);
    }
  };
  var toolkitPubDataCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitPubDataCB() :: >>");
    try {
      var publicDataResponse = new CardPublicData(responseEvent);
      appCB(publicDataResponse, null);
    } catch (error) {
      LOG("CardReader :: toolkitPubDataCB() :: Error ");
      appCB(null, error);
    }
  };
  this.prepareRequest = function (requestId, appCallBack) {
    LOG("CardReader :: prepareRequest() :: >>");
    LOG("CardReader :: prepareRequest() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.PREPARE_REQUEST.service_context = window.service_context;
    services.PREPARE_REQUEST.card_context = readerContext;
    services.PREPARE_REQUEST.request_id = requestId;

    var validate = ValidateParams(services.PREPARE_REQUEST, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.PREPARE_REQUEST),
        toolkitPrepareRequestCB,
        appCallBack
      );
    }
  };
  var toolkitPrepareRequestCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitPrepareRequestCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      var response = parsor.response;
      appCB(response, null);
    } catch (error) {
      LOG("CardReader :: toolkitPrepareRequestCB() :: Error ");
      appCB(null, error);
    }
  };
  this.resetPin = function (
    encodedPin,
    fingerData,
    sensorTimeout,
    appCallBack
  ) {
    LOG("CardReader :: resetPin() :: >>");
    LOG("CardReader :: resetPin() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send VERIFY_BIOMETRIC by specifying parameters */
    services.PIN_RESET.service_context = window.service_context;
    services.PIN_RESET.finger_index = parseInt(
      fingerData.getIndex(fingerData.fingerIndex)
    );
    services.PIN_RESET.sensor_timeout = sensorTimeout;
    services.PIN_RESET.pin = encodedPin;
    services.PIN_RESET.ref_data_id = fingerData.fingerId;
    var validate = ValidateParams(services.PIN_RESET, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.PIN_RESET),
        toolkitResetPinCB,
        appCallBack
      );
    }
  };
  var toolkitResetPinCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitResetPinCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitResetPinCB() :: Error ");
      appCB(null, error);
    }
  };

  this.resetPINWithoutAuthenticateBiometric = function (
    encodedPin,
    appCallBack
  ) {
    LOG("CardReader :: resetPINWithoutAuthenticateBiometric() :: >>");
    LOG(
      "CardReader :: resetPINWithoutAuthenticateBiometric() :: 1 :: connected =" +
        connected
    );
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send VERIFY_BIOMETRIC by specifying parameters */
    services.PIN_RESET_WITHOUT_BIO.service_context = window.service_context;
    services.PIN_RESET_WITHOUT_BIO.pin = encodedPin;
    var validate = ValidateParams(services.PIN_RESET_WITHOUT_BIO, callback);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.PIN_RESET_WITHOUT_BIO),
        ResetPINWithoutAuthenticateBiometricCB,
        appCallBack
      );
    }
  };

  var ResetPINWithoutAuthenticateBiometricCB = function (appCB, responseEvent) {
    LOG("CardReader :: resetPINWithoutAuthenticateBiometric() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: resetPINWithoutAuthenticateBiometric() :: Error ");
      appCB(null, error);
    }
  };

  this.setNfcAuthenticationParameters = function (variableArgumanets) {
    LOG("CardReader :: setNfcAuthenticationParameters() :: >>");
    LOG(
      "CardReader :: setNfcAuthenticationParameters() :: 1 :: number of arguments =" +
        arguments.length
    );
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    var validate;
    services.SET_NFC_PARAMS.service_context = window.service_context;
    services.SET_NFC_PARAMS.card_context = readerContext;
    if (arguments.length === 2) {
      services.SET_NFC_PARAMS.mrz = arguments[0];
      services.SendRequest(
        JSON.stringify(services.SET_NFC_PARAMS),
        setNfcAuthenticationParametersCB,
        arguments[1]
      );
    } else if (arguments.length === 4) {
      services.SET_NFC_PARAMS.cardnumber = arguments[0];
      services.SET_NFC_PARAMS.dob = arguments[1];
      services.SET_NFC_PARAMS.expirydate = arguments[2];
      services.SendRequest(
        JSON.stringify(services.SET_NFC_PARAMS),
        setNfcAuthenticationParametersCB,
        arguments[3]
      );
    }
  };
  var setNfcAuthenticationParametersCB = function (appCB, responseEvent) {
    LOG("CardReader :: setNfcAuthenticationParametersCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor.status, null);
    } catch (error) {
      LOG("CardReader :: setNfcAuthenticationParametersCB() :: Error ");
      appCB(null, error);
    }
  };

  ///////New Function/////////
  this.authenticateBiometricandCardOnServer = function (
    requestId,
    fingerIndex,
    sensorTimeout,
    appCallBack
  ) {
    LOG("CardReader :: authenticateBiometricandCardOnServer() :: >>");
    LOG(
      "CardReader :: authenticateBiometricandCardOnServer() :: 1 :: connected =" +
        connected
    );
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send VERIFY_BIOMETRIC by specifying parameters */
    services.VERIFY_BIOMETRIC_CARD.service_context = window.service_context;
    services.VERIFY_BIOMETRIC_CARD.finger_index =
      self.FINGER_INDEXS[fingerIndex];
    services.VERIFY_BIOMETRIC_CARD.request_id = requestId;
    services.VERIFY_BIOMETRIC_CARD.sensor_timeout = sensorTimeout;
    services.VERIFY_BIOMETRIC_CARD.card_context = readerContext;
    var validate = ValidateParams(services.VERIFY_BIOMETRIC_CARD, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.VERIFY_BIOMETRIC_CARD),
        toolkitVerifyBioandCardCB,
        appCallBack
      );
    }
  };
  var toolkitVerifyBioandCardCB = function (appCB, responseEvent) {
    LOG("CardReader :: toolkitVerifyBioandCardCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: toolkitVerifyBioandCardCB() :: Error ");
      appCB(null, error);
    }
  };

  this.readPublicDataEF = function (publicDataEFType, appCallBack) {
    LOG("CardReader :: readPublicDataEF() :: >>");
    LOG("CardReader :: readPublicDataEF() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.DATA_EF_TYPE.service_context = window.service_context;
    services.DATA_EF_TYPE.card_context = readerContext;
    services.DATA_EF_TYPE.public_data_ef_type = parseInt(publicDataEFType);
    var validate = ValidateParams(services.DATA_EF_TYPE, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.DATA_EF_TYPE),
        readPublicDataEFCB,
        appCallBack
      );
    }
  };
  var readPublicDataEFCB = function (appCB, responseEvent) {
    LOG("CardReader :: readPublicDataEFCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: readPublicDataEFCB() :: Error ");
      appCB(null, error);
    }
  };

  this.readData = function (requestId, readDataFileType, appCallBack) {
    LOG("CardReader :: readData() :: >>");
    LOG("CardReader :: readData() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.READDATA.service_context = window.service_context;
    services.READDATA.card_context = readerContext;
    services.READDATA.file_type = parseInt(readDataFileType);
    services.READDATA.request_id = requestId;
    let validate = ValidateParams(services.READDATA, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.READDATA),
        readDataCB,
        appCallBack
      );
    }
  };
  var readDataCB = function (appCB, responseEvent) {
    LOG("CardReader :: readDataCB() :: >>");
    try {
      var parsor = new CardReadData(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: readDataCB() :: Error ");
      appCB(null, error);
    }
  };

  this.updateData = function (requestId, updateDataFileType, appCallBack) {
    LOG("CardReader :: updateData() :: >>");
    LOG("CardReader :: updateData() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    services.UPDATEDATA.service_context = window.service_context;
    services.UPDATEDATA.card_context = readerContext;
    services.UPDATEDATA.file_type = parseInt(updateDataFileType);
    services.UPDATEDATA.request_id = requestId;
    var validate = ValidateParams(services.UPDATEDATA, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.UPDATEDATA),
        updateDataCB,
        appCallBack
      );
    }
  };
  var updateDataCB = function (appCB, responseEvent) {
    LOG("CardReader :: updateDataCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: readDataCB() :: Error ");
      appCB(null, error);
    }
  };

  this.getCardSerialNumber = function (appCallBack) {
    LOG("CardReader :: getCardSerialNumber() :: >>");
    LOG("CardReader :: getCardSerialNumber() :: 1 :: connected =" + connected);
    if (!connected) {
      var error = new ToolkitException(
        ErrorCodes.READER_NOT_CONNECTED_ERROR,
        "Reader not connected..",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    /*  send VERIFY_BIOMETRIC by specifying parameters */
    services.CSN.service_context = window.service_context;
    services.CSN.card_context = readerContext;
    var validate = ValidateParams(services.CSN, appCallBack);
    if (validate) {
      services.SendRequest(
        JSON.stringify(services.CSN),
        getCardSerialNumberCB,
        appCallBack
      );
    }
  };
  var getCardSerialNumberCB = function (appCB, responseEvent) {
    LOG("CardReader :: getCardSerialNumberCB() :: >>");
    try {
      var parsor = new ToolkitResponse(responseEvent);
      appCB(parsor, null);
    } catch (error) {
      LOG("CardReader :: getCardSerialNumberCB() :: Error ");
      appCB(null, error);
    }
  };

  ///////End//////////////////
}
/**
 * Class ToolkitException. This class defines methods to get exception details
 */
function ToolkitException(code, message, errorType, attemptsLeft) {
  this.code = code;
  this.message = message;
  this.exceptionType = errorType;
  this.attemptsLeft = attemptsLeft;
}
/////////////////Chnged/////////////////
function ToolkitExceptionWithResponse(
  toolkit_response,
  code,
  message,
  errorType,
  attemptsLeft
) {
  this.toolkit_response = toolkit_response;
  this.message = message;
  this.exceptionType = errorType;
  this.attemptsLeft = attemptsLeft;
  this.code = code;
}
///////////////Complete////////////

function ToolkitResponse(response) {
  LOG("ToolkitResponse :: constructor() :: >>");
  this.tooklitResponse = null;
  this.message = null;
  var header = null;
  var body = null;
  var responseStatus = null;
  this.xmlString = null;
  this.response = null;
  result = JSON.parse(response.data);
  this.status = result.status;
  this.tooklitResponse = result.toolkit_response;
  LOG(
    "ToolkitResponse :: constructor() :: 1 :: response status = " + this.status
  );
  LOG(
    "ToolkitResponse :: constructor() :: 2 :: result.toolkit_response = " +
      this.tooklitResponse
  );

  if (0 < result.error_code) {
    if (
      null != result.attempts_left &&
      undefined != result.attempts_left &&
      null != result.toolkit_response &&
      undefined != result.toolkit_response
    ) {
      error = new ToolkitExceptionWithResponse(
        result.toolkit_response,
        result.error_code,
        result.error_message,
        ExceptionType.CARD_PIN_ERROR,
        result.attempts_left
      );
    } else if (
      null != result.attempts_left &&
      undefined != result.attempts_left
    ) {
      error = new ToolkitException(
        result.error_code,
        result.error_message,
        ExceptionType.CARD_PIN_ERROR,
        result.attempts_left
      );
    } else if (
      null != result.toolkit_response &&
      undefined != result.toolkit_response
    ) {
      error = new ToolkitExceptionWithResponse(
        result.toolkit_response,
        result.error_code,
        result.error_message,
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    } else {
      error = new ToolkitException(
        result.error_code,
        result.error_message,
        ExceptionType.TOOLKIT_ERROR,
        null
      );
    }
    throw error;
  }
  if (
    null !== result.toolkit_response &&
    undefined !== result.toolkit_response &&
    result.toolkit_response.length > 0
  ) {
    LOG("ToolkitResponse :: constructor() :: 3 ");
    var domParser = new DOMParser();
    var jsonObj = {
      ValidationGatewayResponse: null,
    };
    try {
      var xmlDoc = domParser.parseFromString(
        result.toolkit_response,
        "text/xml"
      );
      jsonObj = xmlToJson(xmlDoc);
    } catch (e) {}

    if (jsonObj.ValidationGatewayResponse) {
      this.message = jsonObj.ValidationGatewayResponse.Message;
      validateElement(this.message, "Message");
      header = this.message.Header;
      validateElement(header, "Header");
      body = this.message.Body;
      validateElement(body, "Body");
      responseStatus = body.ResponseStatus;
      validateElement(responseStatus, "ResponseStatus");
      if ("Success" !== responseStatus) {
        LOG("ToolkitResponse :: constructor() :: 4 ");
        error = null;
        if (null != result.attempts_left && undefined != result.attempts_left) {
          error = new ToolkitException(
            result.error_code,
            result.error_message,
            ExceptionType.TOOLKIT_PIN_AUTHENTICATION_ERROR,
            result.attempts_left
          );
        } else {
          error = new ToolkitException(
            result.error_code,
            result.error_message,
            ExceptionType.TOOLKIT_ERROR,
            null
          );
        }
        throw error;
      }
      this.xmlString = result.toolkit_response;
      this.cardNumber = header.CardNumber;
      this.cardSerialNumber = header.CardSerialNumber;
      this.iDNumber = header.IDNumber;
      this.requestId = header.RequestID;
      this.service = header.Service;
      this.timeStamp = header.Timestamp;
      LOG("ToolkitResponse :: constructor() :: 5 ");
    } else {
      LOG("ToolkitResponse :: constructor() :: 6 ");
      this.response = result.toolkit_response;
    }
    LOG("ToolkitResponse :: constructor() :: << ");
  } else if (
    "success" === result.status &&
    undefined === result.toolkit_response
  ) {
    LOG("ToolkitResponse :: constructor() :: 3 ");
    return result;
  }

  function validateElement(element, elementName) {
    LOG("ToolkitResponse :: validateElement() :: >>");
    if (null == element || undefined == element) {
      var error = new ToolkitException(
        ErrorCodes.INVALID_TOOLKIT_RESPONSE_XML,
        "Invalid Toolkit Response XML Format. Element not found :" +
          elementName,
        ExceptionType.TOOLKIT_ERROR,
        null
      );
      throw error;
    }
  }
}

function CardReadData(response) {
  ToolkitResponse.call(this, response);
  this.OrganDonor = new OrganDonar(this.message.Body.HealthData.OrganDonor);
  this.resource = [];
  if (this.message.Body.HealthData.resource) {
    for (let i = 0; i < this.message.Body.HealthData.resource.length; i++) {
      let resources = new Resource(this.message.Body.HealthData.resource[i]);
      this.resource.push(resources);
    }
  }
}
CardReadData.prototype = Object.create(ToolkitResponse.prototype);
CardReadData.prototype.constructor = CardReadData;

/* Changes XML to JSON */
function xmlToJson(xml) {
  /*   Create the return object */
  var obj = {};
  if (xml.nodeType == 1) {
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    obj = xml.nodeValue;
  }
  /*  do children */
  if (xml.hasChildNodes()) {
    if (xml.childNodes.length === 1 && xml.childNodes[0].nodeName === "#text") {
      obj = xml.textContent;
    } else {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if ("#text" == nodeName) {
          nodeName = "text";
        }
        if (typeof obj[nodeName] == "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
  }
  return obj;
}
/**
 * Class CardPublicData extends class ToolkitResponse.
 * This class defines CardPublicData fields
 */
function CardPublicData(responseJSON) {
  ToolkitResponse.call(this, responseJSON);
  this.cardNumber = this.message.Body.PublicData.CardNumber;
  this.cardHolderPhoto = this.message.Body.PublicData.CardHolderPhoto;
  this.holderSignatureImage = this.message.Body.PublicData.HolderSignatureImage;
  this.modifiablePublicData = new ModifiablePublicData(
    this.message.Body.PublicData.ModifiableData
  );
  this.nonModifiablePublicData = new NonModifiablePublicData(
    this.message.Body.PublicData.NonModifiableData
  );
  this.homeAddress = new HomeAddress(this.message.Body.PublicData.HomeAddress);
  this.workAddress = new WorkAddress(this.message.Body.PublicData.WorkAddress);
}
CardPublicData.prototype = Object.create(ToolkitResponse.prototype);
CardPublicData.prototype.constructor = CardPublicData;
/**
 * Class RegisterDeviceResponse extends class ToolkitResponse.
 * This class defines RegisterDeviceResponse fields
 */
function DataProtectionKey(responseJSON) {
  ToolkitResponse.call(this, responseJSON);
  var parsor = JSON.parse(responseJSON.data);
  this.publicKey = parsor.data_protection_key;
  this.modulus = parsor.modulus;
  this.exponent = parsor.exponent;
}

function RegisterDeviceResponse(responseJSON) {
  ToolkitResponse.call(this, responseJSON);
  var error = null;
  if (
    null == this.message.Body.DeviceRegistrationID &&
    undefined == this.message.Body.DeviceRegistrationID
  ) {
    error = new ToolkitException(
      ErrorCodes.INVALID_TOOLKIT_RESPONSE_XML,
      "Invalid Toolkit Response XML Format. Element not found : Device Registration ID",
      ExceptionType.TOOLKIT_ERROR,
      null
    );
    throw error;
  }
  this.deviceRegistrationID = this.message.Body.DeviceRegistrationID;
}
RegisterDeviceResponse.prototype = Object.create(ToolkitResponse.prototype);
RegisterDeviceResponse.prototype.constructor = RegisterDeviceResponse;

function CardFamilyBookData(responseJSON) {
  ToolkitResponse.call(this, responseJSON);
  this.HeadOfFamily = new HeadOfFamily(
    this.message.Body.FamilyBook.HeadOfFamily
  );
  this.wives = [];
  this.children = [];
  if (this.message.Body.FamilyBook.WifeData) {
    if (this.message.Body.FamilyBook.WifeData.Wife.length) {
      for (
        let i = 0;
        i < this.message.Body.FamilyBook.WifeData.Wife.length;
        i++
      ) {
        let wife = new Wife(this.message.Body.FamilyBook.WifeData.Wife[i]);
        this.wives.push(wife);
      }
    } else {
      let wife = new Wife(this.message.Body.FamilyBook.WifeData.Wife);
      this.wives.push(wife);
    }
  }
  if (this.message.Body.FamilyBook.ChildData) {
    if (this.message.Body.FamilyBook.ChildData.Child.length) {
      for (
        let i = 0;
        i < this.message.Body.FamilyBook.ChildData.Child.length;
        i++
      ) {
        let child = new Child(this.message.Body.FamilyBook.ChildData.Child[i]);
        this.children.push(child);
      }
    } else {
      this.children.push(
        new Child(this.message.Body.FamilyBook.ChildData.Child[i])
      );
    }
  }
}
CardFamilyBookData.prototype = Object.create(ToolkitResponse.prototype);
CardFamilyBookData.prototype.constructor = CardFamilyBookData;
/**
 * Class CardCertificates extends class ToolkitResponse.
 * This class defines CardCertificates fields
 */
function CardCertificates(responseEvent) {
  ToolkitResponse.call(this, responseEvent);
  var error = null;
  if (
    null == this.message.Body.AuthenticationCertificate &&
    undefined == this.message.Body.AuthenticationCertificate
  ) {
    error = new ToolkitException(
      ErrorCodes.INVALID_TOOLKIT_RESPONSE_XML,
      "Invalid Toolkit Response XML Format. Element not found : Authentication Certificate",
      ExceptionType.TOOLKIT_ERROR,
      null
    );
    throw error;
  }
  if (
    null == this.message.Body.SignatureCertificate &&
    undefined == this.message.Body.SignatureCertificate
  ) {
    error = new ToolkitException(
      ErrorCodes.INVALID_TOOLKIT_RESPONSE_XML,
      "Invalid Toolkit Response XML Format. Element not found : Signing Certificate",
      ExceptionType.TOOLKIT_ERROR,
      null
    );
    throw error;
  }
  this.authenticationCertificate = this.message.Body.AuthenticationCertificate;
  this.signingCertificate = this.message.Body.SignatureCertificate;
}
CardCertificates.prototype = Object.create(ToolkitResponse.prototype);
CardCertificates.prototype.constructor = CardCertificates;
/**
 * Class FingerData.
 * This class defines FingerData fields
 */
function FingerData(fingerId, fingerIndex) {
  /*  finger index constants */
  var FINGER_INDEX = {
    3: "NO_MEANING",
    5: "RIGHT_THUMB",
    9: "RIGHT_INDEX",
    13: "RIGHT_MIDDLE",
    17: "RIGHT_RING",
    21: "RIGHT_LITTLE",
    6: "LEFT_THUMB",
    10: "LEFT_INDEX",
    14: "LEFT_MIDDLE",
    18: "LEFT_RING",
    22: "LEFT_LITTLE",
  };
  this.fingerId = fingerId;
  this.fingerIndex = FINGER_INDEX[fingerIndex];
  this.getIndex = function () {
    for (var key in FINGER_INDEX) {
      if (this.fingerIndex === FINGER_INDEX[key]) {
        return key;
      }
    }
  };
}
/**
 * Class SignatureResponse extends class ToolkitResponse.
 * This class defines SignatureResponse fields
 */
function SignatureResponse(responseJSON) {
  ToolkitResponse.call(this, responseJSON);
  var error = null;
  if (
    null == this.message.Body.Signature &&
    undefined == this.message.Body.Signature
  ) {
    error = new ToolkitException(
      ErrorCodes.INVALID_FIELD,
      "Invalid Toolkit Response XML Format. Element not found : Signature",
      ExceptionType.TOOLKIT_ERROR,
      null
    );
    throw error;
  }
  this.signature = this.message.Body.Signature;
}
SignatureResponse.prototype = Object.create(ToolkitResponse.prototype);
SignatureResponse.prototype.constructor = SignatureResponse;
var ValidateParams = function (requestObj, appCallBack) {
  let IsValidated = true;
  for (var key in requestObj) {
    if (requestObj[key] || requestObj[key] === 0 || requestObj[key] === false) {
    } else {
      IsValidated = false;
      var error = new ToolkitException(
        ErrorCodes.INVALID_FIELD,
        "'" + key + "' value is invalid",
        ExceptionType.TOOLKIT_ERROR,
        null
      );
      appCallBack(null, error);
      break;
    }
  }
  return IsValidated;
};

function parseEFData(efdata, appCallBack) {
  LOG("CardReader :: parseEFData() :: >>");
  services.PARSE_EF_DATA.ef_data = efdata;
  var validate = ValidateParams(services.PARSE_EF_DATA, appCallBack);
  if (validate) {
    services.SendRequest(
      JSON.stringify(services.PARSE_EF_DATA),
      parseEFDataCB,
      appCallBack
    );
  }
}
var parseEFDataCB = function (appCB, responseEvent) {
  LOG("CardReader :: parseEFDataCB() :: >>");
  try {
    var parsor = new ToolkitResponse(responseEvent);
    appCB(parsor, null);
  } catch (error) {
    LOG("CardReader :: parseEFDataCB() :: Error ");
    appCB(null, error);
  }
};
("use strict");
var xmlResponse = null;
var xmlDiv = null;
var ToolkitOB = null;
var readerClass = null;
this.fingerData = null;
this.verifyxmldata = null;
var self = this;
var javaService = "";
this.IsNfc = false;
var localAddress = window.location.href;
var options = {
  jnlp_address: javaService + "IDCardToolkitService.jnlp",
  debugEnabled: true,
  agent_tls_enabled: false,
  agent_host_name: "toolkitagent.emiratesid.ae",
};
var IsSam = {
  sam_secure_messaging: true,
};
//options.toolkitConfig = 'vg_url = http://172.16.11.13/ValidationGatewayService\n'
options.toolkitConfig = "vg_connection_timeout = 60 \n";
options.toolkitConfig += 'log_level = "INFO" \n';
options.toolkitConfig += "log_performance_time = true \n";
options.toolkitConfig += "read_publicdata_offline = true \n";

var signingContext = {
  signatureLevel: null,
  packagingMode: null,
  digestAlgorithm: null,
  userPin: null,
  tsaUrl: null,
  ocspUrl: null,
  certPath: null,
  countryCode: null,
  locality: null,
  postalCode: null,
  stateOrProvince: null,
  street: null,
  signNmPositionSelect: null,
  sigVisibleSelect: null,
  pgNumberTxtBx: null,
  sigTextTxtBx: null,
  fontNameTxtBx: null,
  fontSizeTxtBx: null,
  fontColorTxtBx: null,
  bgColorTxtBx: null,
  sigImgPathTxtBx: null,
  sigYaxisTxtBx: null,
  sigXaxisTxtBx: null,
  signerContactInfoTxtBx: null,
  signerLocationTxtBx: null,
  reasonSignTxtBx: null,
};
var verificationContext = {
  inputPath: null,
  packagingMode: null,
  certPath: null,
  signedData: null,
  detached: null,
  detachedValue: null,
};
var PUBLIC_DATA_EF_TYPE = {
  public_data_ef_type: "",
};
/**
 * Error handler call back function.
 * This function is executed if any error occurred in the web socket communication.
 * This function is passed as a error call back function while initializing the web socket.
 *
 * @param err error details
 */
var errorHandlerCB = function (err) {
  readerClass = null;
  ToolkitOB = null;
  if (null !== err) {
    // hideLoader();
    alert("errorHandler ERROR : " + err);
  }
};
/**
 * Close handler call back function.
 * This function is executed when web socket connection is closed.
 * This function is passed as a close call back function while initializing the web socket.
 *
 * @param response response details
 */
var closeHandlerCB = function (response) {
  // hideLoader();
  ToolkitOB = null;
  readerClass = null;
  if (null !== response && undefined == response) {
  }
  changeButtonState(true);
  document.getElementById("workAreaDiv").style.display = "none";
};
/**
 * Close handler call back function.
 * This function is executed when web socket connection is closed.
 * This function is passed as a close call back function while initializing the web socket.
 *
 * @param response response details
 */
/**
 * open handler call back function.
 * This function is executed when web socket connection is opened/established successfully.
 * This function is passed as a onOpen call back function while initializing the web socket.
 *
 */
var onOpenHandlerCB = function (response, error) {
  // hideLoader();
  console.log("onOpenHandlerCB : ");
  if (error === null) {
    /**
     * call the list reader function and pass listReaderCB to be executed
     * after the response is received from server
     */
    if (IsSam.sam_secure_messaging) {
      ToolkitOB.getReaderWithEmiratesId(listReaderCB);
    } else {
      ToolkitOB.listReaders(listReaderCB);
    }
  } else {
    ToolkitOB = null;
  }
};
/**
 * listReader handler call back function.
 * This function is executed when response is received from server for listReader request.
 * This function is passed as a listReader call back function while sending listReader request.
 *
 * @param response describing response from server.
 *  response object has one field 'data' which contains a string in the json format.
 *  This string can be converted to json object by using JSON.parse(response.data);
 *
 */
var listReaderCB = function (response, error) {
  if (error !== null) {
    alert(error.message || error.description);
    ToolkitOB = null;
    displayProgress("Initializing Web Socket Failed. Reader Not Connected ...");
    hideLoader();
  } else {
    var readerName = null;
    var readerList = response;
    if (IsSam.sam_secure_messaging) {
      readerClass = readerList;
    } else {
      if (readerList && 0 < readerList.length) {
        readerClass = readerList[0];
      } else {
        return "No readers found";
      }
    }
    displayProgress("Initializing Web Socket Success ...");
    displayProgress("Connecting to reader ...");
    /**
     * call the connect reader function and pass connectReaderCB to be executed
     * after the response is received from server
     */
    var ret = readerClass.connect(connectReaderCB);
    if ("" !== ret) {
      /* disable all buttons till request is processed */
    //  changeButtonState(true);
    }
  }
};
/**
 * connectReader handler call back function.
 * This function is executed when response is received from server for connectReader request.
 * This function is passed as a connectReader call back function while sending connectReader request.
 *
 * @param response describing response from server.
 *  response object has one field 'data' which contains a string in the json format.
 *  This string can be converted to json object by using JSON.parse(response.data);
 *
 */
var connectReaderCB = function (response, error) {
  if (null !== error) {
    alert(error.code + " : " + error.message);
    ToolkitOB = null;
    displayProgress("Card Not Connected, Connect failed ...");
    hideLoader();
    return;
  }

  readerClass.getInterfaceType(getInterfaceCB);
  //document.getElementById("workAreaDiv").style.display = "block";
  displayProgress("Card Connected, Connect Success ...");
};

/**
 * This function is used to get Interface of the reader
 */
var getInterfaceCB = function (response, error) {
  if (null !== error) {
    alert(error.code + " : " + error.message);
    ToolkitOB = null;
    return;
  }
  if (response === 2) {
    self.IsNfc = true;
    alert("Initialize Success. First Set NFC Parameters.");
  } else {
    self.IsNfc = false;
  }

  hideLoader();
  /* enable all buttons */
  changeButtonState(false);
};
/**
 * This function is used to initialize the PublicDataWebComponent
 */
function Initialize() {
  try {
    console.log("onOpenHandlerCB : ");

    /* Ensures only one connection is open at a time */
    if (ToolkitOB !== null) {
      /*  enable all buttons  */
      if (readerClass !== null) {
        changeButtonState(false);
        hideLoader();
        return "WebSocket is already active ...";
      }
    }

    /*  if
		 provide the call backs */
    showLoader();
    console.log("making tk : ");

    ToolkitOB = new Toolkit(
      onOpenHandlerCB /* reference to onOpen call back function */,
      closeHandlerCB /* reference to onClose call back function */,
      errorHandlerCB /* reference to onError call back function */,
      options /* options */
    );
    displayProgress("Initializing Web Socket ...");
  } catch (e) {
    console.log("testest" + e);

    // hideLoader();
    alert("Webcomponent Initialization Failed, Details: " + e);
  }
}
/**
 * This function is used to read the public data from first reader
 * found.
 */
function DisplayPublicData(nfc) {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  /*  disable all buttons till request is processed */
  changeButtonState(true);
  showLoader();
  displayProgress("Reading public data...");
  /*  generate the random string */
  var randomStr = generateRandomString(40);
  /* convert randomString to base64 */
  var requestId = btoa(randomStr);
  /**
   * call the read public data function and pass readPublicDataCB to be executed
   * after the response is received from server
   */
  var address = true;
  if (self.IsNfc) {
    address = false;
  }
  //document.getElementById("res").value = "";
  readerClass.readPublicData(
    requestId,
    true,
    true,
    true,
    true,
    address,
    readPublicDataCB
  );
  changeButtonState(true);
}
/**
 * readPublicData handler call back function.
 * This function is executed when response is received from server for readPublicData request.
 * This function is passed as a readPublicData call back function while sending readPublicData request.
 *
 * @param response describing response from server.
 *  response object has one field 'data' which contains a string in the json format.
 *  This string can be converted to json object by using JSON.parse(response.data);
 *
 */
var readPublicDataCB = function (response, error) {
  hideLoader();
  if (error === null) {
    displayData(response, "readPublicDataDiv");
    console.log('public data', response);
    if (response.xmlString !== null && response.xmlString !== undefined) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = response.xmlString;
    }
  } else {
    alert(error.message);
    changeButtonState(false);
  }
  /* enable all buttons as request is completed */
  changeButtonState(false);
};

/**
 * This function is to check card status
 */
function CheckCardStatus() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  document.getElementById("res").value = "";
  displayProgress("Checking Card Status...");
  showLoader();
  var randomStr = generateRandomString(40);
  var requestId = btoa(randomStr);
  readerClass.checkCardStatus(requestId, CheckCardStatusCB);
  changeButtonState(true);
}
var CheckCardStatusCB = function (response, error) {
  showDiv("cardStatusDiv");
  hideLoader();
  changeButtonState(false);
  if (error !== null) {
    document.getElementById("cardStatusTxtBx").style.color = "red";
    document.getElementById("cardStatusTxtBx").value = error.message;
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = error.toolkit_response;
    return;
  }

  document.getElementById("cardStatusTxtBx").style.color = "green";
  document.getElementById("cardStatusTxtBx").value = "Card Is Valid";
  document.getElementById("cardStatusTxtXMlrow").style.display = null;
  document.getElementById("cardStatusTxtXML").value = response.xmlString;
  if (response.xmlString !== null && response.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = response.xmlString;
  }
  changeButtonState(false);
};
/**
 * This function is to read certificates
 */
function ReadCertificate() {
  displayProgress("Reading Certificates Data");
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("readCertsDiv");
}

function ReadCertificates() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  changeButtonState(true);
  var pin = document.getElementById("rd_cert_pin").value;
  if (pin == null || undefined == pin || "" == pin || pin.length < 4) {
    alert("Please enter valid pin.");
    return;
  }
  showLoader();
  document.getElementById("res").value = "";
  PrepareRequest(function (requestHandle) {
    if (requestHandle === undefined || requestHandle === null) {
      var encodedPin = pin;
      readerClass.getPkiCertificates(encodedPin, ReadCertificatesCB);
    } else {
      ToolkitOB.getDataProtectionKey(function (response, error) {
        var encodedPin = encodePinOnServer(
          pin,
          requestHandle,
          response.publicKey
        );
        if (encodedPin == -1) {
          hideLoader();
          changeButtonState(false);
          alert("Failed to Encrypt data");
          return;
        }

        readerClass.getPkiCertificates(encodedPin, ReadCertificatesCB);
      });
    }
  });
}
var ReadCertificatesCB = function (response, error) {
  hideLoader();
  if (null !== error) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    alert(error.message);
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
    }
    changeButtonState(false);
    return;
  }
  var result = response;
  if ("fail" === result.status) {
    return result.error + " : " + result.description;
    changeButtonState(false);
  }
  document.getElementById("signCertTextArea").value = result.signingCertificate;
  document.getElementById("authCertTextArea").value =
    result.authenticationCertificate;
  if (result.xmlString !== null && result.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = result.xmlString;
  }
  /*  enable all buttons as request is completed */
  changeButtonState(false);
};
/**
 * This function is to get finger indexes
 */
function GetFingerIndex() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  showDiv("fingerIndexDiv");
  showLoader();
  changeButtonState(true);
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  readerClass.getFingerData(GetFingerIndexCB);
  changeButtonState(true);
  return;
}
var GetFingerIndexCB = function (response, error) {
  hideLoader();
  if (null !== error) {
    alert(error.message);
    changeButtonState(false);
    return;
  }
  document.getElementById("fingerIndexTextArea").value =
    response[0].fingerIndex + "\n" + response[1].fingerIndex;
  changeButtonState(false);
};
/**
 * This function is to verify biometric
 */
function VerifyBio() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  showDiv("verifyBioDiv");
  changeButtonState(false);
  showLoader();
  document.getElementById("res").value = "";
  readerClass.getFingerData(function (response, error) {
    hideLoader();
    if (error !== null) {
      alert(error.message);
      changeButtonState(false);
      return;
    }
    var result = response;
    if ("fail" === result.status) {
      return result.error + " : " + result.description;
    }
    /* set result of getFingerIndex to local variable so that it can be while verifying biometric */
    self.fingerData = result;
    var selectBox = document.getElementById("verifyBioFingerSelect");
    if (selectBox.options.length > 1) {
      selectBox.removeChild(selectBox.options[2]);
      selectBox.removeChild(selectBox.options[1]);
    }
    var option1 = document.createElement("option");
    var opt1 = result[0].fingerIndex;
    option1.text = opt1;
    selectBox.add(option1);
    var option2 = document.createElement("option");
    option2.text = result[1].fingerIndex;
    selectBox.add(option2);
    changeButtonState(false);
  });
}

function VerifyBioSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var selectedFinger = document.getElementById("verifyBioFingerSelect").value;
  if ("Select Finger" == selectedFinger || undefined == selectedFinger) {
    alert("Please select a finger.");
    return;
  }
  /*  disable all buttons till request is processe */
  changeButtonState(true);
  showLoader();
  displayProgress("Verifying biometric ...");
  var sensor_timeout = 30; /* seconds */
  var randomStr = generateRandomString(40);
  var requestId = btoa(randomStr);
  readerClass.authenticateBiometricOnServer(
    requestId,
    selectedFinger,
    sensor_timeout,
    VerifyBioCB
  );
}
var VerifyBioCB = function (response, error) {
  hideLoader();
  if (null !== error) {
    changeButtonState(false);
    document.getElementById("verifyBioTxtBx").value = error.message;
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      document.getElementById("verifyBioTxtBx").style.color = "red";
      self.verifyxmldata = error.toolkit_response;
    }
    if (self.IsNfc) {
      nfcMenu();
    }
    return;
  }
  result = response;
  document.getElementById("verifyBioTxtBx").style.color = "green";
  document.getElementById("verifyBioTxtBx").value = "Successful.";
  document.getElementById("verifyBioTxtBx").type = "text";
  if (self.IsNfc) {
    nfcMenu();
  }
  /* disable all buttons till request is processed */
  if (result.xmlString !== null && result.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = result.xmlString;
  }
  changeButtonState(false);
};

function PKIAuth() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("pkiAuthDiv");
}

function PKIAuthSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var pin = document.getElementById("pkiAuthTxtBx").value;
  if (pin == null || undefined == pin || "" == pin || pin.length < 4) {
    alert("Please enter valid pin.");
    return;
  }
  changeButtonState(true);
  showLoader();
  PrepareRequest(function (requestHandle) {
    if (requestHandle === undefined || requestHandle === null) {
      var encodedPin = pin;
      readerClass.authenticatePki(encodedPin, PKIAuthCB);
    } else {
      ToolkitOB.getDataProtectionKey(function (response, error) {
        var encodedPin = encodePinOnServer(
          pin,
          requestHandle,
          response.publicKey
        );
        if (encodedPin == -1) {
          hideLoader();
          changeButtonState(false);
          alert("Failed to Encrypt data");
          return;
        }
        readerClass.authenticatePki(encodedPin, PKIAuthCB);
      });
    }
  });
}
var PKIAuthCB = function (response, error) {
  hideLoader();
  changeButtonState(false);
  if (error !== null) {
    document.getElementById("pkiAuthResultTxtBx").type = "text";
    document.getElementById("pkiAuthResultTxtBx").style.color = "red";
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    alert(error.message);
    if (error.toolkit_response !== null && error.toolkit_response) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
    }
    document.getElementById("pkiAuthResultTxtBx").value = error.message;
    return;
  }
  document.getElementById("pkiAuthResultTxtBx").type = "text";
  document.getElementById("pkiAuthResultTxtBx").style.color = "green";
  document.getElementById("pkiAuthResultTxtBx").value = "Valid Auth Cert";
  if (response.xmlString !== null && response.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = response.xmlString;
  }
  changeButtonState(false);
};
/**
 * This function is to show sign data div
 */
function SignData() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("signDataDiv");
}
/**
 * This function is to sign data
 */
function SignDataSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var dataHashed = document.getElementById("signDataHashedSelect").value;
  if (undefined === dataHashed || "" === dataHashed) {
    alert("Please select type of data.");
    return;
  }
  var data = document.getElementById("dataTextArea").value;
  if (undefined === data || "" === data) {
    alert("Please enter valid data.");
    return;
  }
  var pin = prompt("Please enter your pin", "");
  if (pin == null || undefined == pin || "" == pin || pin.length < 4) {
    alert("Please enter valid pin.");
    return;
  }
  var result = null;
  var readerName = null;
  /* disable all buttons till request is processed */
  changeButtonState(true);
  showLoader();
  PrepareRequest(function (requestHandle) {
    if (requestHandle === undefined || requestHandle === null) {
      var encodedPin = pin;
      readerClass.signData(data, parseInt(dataHashed), encodedPin, SignDataCB);
    } else {
      ToolkitOB.getDataProtectionKey(function (response, error) {
        var encodedPin = encodePinOnServer(
          pin,
          requestHandle,
          response.publicKey
        );
        if (encodedPin == -1) {
          hideLoader();
          changeButtonState(false);
          alert("Failed to Encrypt data");
          return;
        }
        readerClass.signData(
          data,
          parseInt(dataHashed),
          encodedPin,
          SignDataCB
        );
      });
    }
  });
}
var SignDataCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    alert(error.message);
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
    }
    changeButtonState(false);
    return;
  }
  var result = response;
  var resultData = "";
  if ("fail" === result.status) {
    resultData =
      result.error + " : " + result.description + " : " + result.attemptsLeft;
    document.getElementById("resultTextArea").value = resultData;
    changeButtonState(false);
    return;
  }
  resultData = result.signature;
  document.getElementById("resultTextArea").value = resultData;
  if (result.xmlString !== null && result.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = result.xmlString;
  }
  changeButtonState(false);
};

function SignChallengeData() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("signChallangeDataDiv");
}
/**
 * This function is to sign data
 */
function SignChallengeDataSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var dataHashed = document.getElementById(
    "challengesignDataHashedSelect"
  ).value;
  if (undefined === dataHashed || "" === dataHashed) {
    alert("Please select type of data.");
    return;
  }
  var data = document.getElementById("challengedataTextArea").value;
  if (undefined === data || "" === data) {
    alert("Please enter valid data.");
    return;
  }
  var pin = prompt("Please enter your pin", "");
  if (pin == null || undefined == pin || "" == pin || pin.length < 4) {
    alert("Please enter valid pin.");
    return;
  }
  var result = null;
  var readerName = null;
  /*  disable all buttons till request is processed */
  changeButtonState(true);
  showLoader();
  PrepareRequest(function (requestHandle) {
    if (requestHandle === undefined || requestHandle === null) {
      var encodedPin = pin;
      readerClass.signChallenge(
        data,
        parseInt(dataHashed),
        encodedPin,
        SignChallangeDataCB
      );
    } else {
      ToolkitOB.getDataProtectionKey(function (response, error) {
        var encodedPin = encodePinOnServer(
          pin,
          requestHandle,
          response.publicKey
        );
        if (encodedPin == -1) {
          hideLoader();
          changeButtonState(false);
          alert("Failed to Encrypt data");
          return;
        }
        readerClass.signChallenge(
          data,
          parseInt(dataHashed),
          encodedPin,
          SignChallangeDataCB
        );
      });
    }
  });
}
var SignChallangeDataCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    alert(error.message);
    changeButtonState(false);
    return;
  }
  var result = response;
  document.getElementById("challengeresultTextArea").value = result.signature;
  /* enable all buttons as request is processed */
  if (result.xmlString !== null && result.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = result.xmlString;
  }
  changeButtonState(false);
};
/**
 * This function is to sign data
 */
function VerifySignature() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("verifyDataDiv");
}

function VerifyDataSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var dataHashed = document.getElementById("verifyDataHashedSelect").value;
  if (undefined === dataHashed || "" === dataHashed) {
    alert("Please select type of data.");
    return;
  }
  var certType = document.getElementById("verifyDataCertSelect").value;
  if (undefined === certType || "" === certType) {
    alert("Please select type of data.");
    return;
  }
  var originalData = document.getElementById("originalDataTextArea").value;
  if (undefined === originalData || "" === originalData) {
    alert("Please enter valid original data.");
    return;
  }
  var signedData = document.getElementById("signedDataTextArea").value;
  if (undefined === signedData || "" === signedData) {
    alert("Please enter valid signed data.");
    return;
  }
  var pin = prompt("Please enter your pin", "");
  if (pin == null || undefined == pin || "" == pin || pin.length < 4) {
    alert("Please enter valid pin.");
    return;
  }
  var certData = "";
  showLoader();
  PrepareRequest(function (requestHandle) {
    if (requestHandle === undefined || requestHandle === null) {
      var encodedPin = pin;
      readerClass.getPkiCertificates(encodedPin, function (response, error) {
        if (certType == 1) {
          certData = response.signingCertificate;
        } else {
          certData = response.authenticationCertificate;
        }
        changeButtonState(true);
        readerClass.verifySignature(
          originalData,
          parseInt(dataHashed),
          signedData,
          certData,
          VerifyDataCB
        );
        // changeButtonState(true);
      });
    } else {
      ToolkitOB.getDataProtectionKey(function (response, error) {
        var encodedPin = encodePinOnServer(
          pin,
          requestHandle,
          response.publicKey
        );
        if (encodedPin == -1) {
          hideLoader();
          changeButtonState(false);
          alert("Failed to Encrypt data");
          return;
        }
        readerClass.getPkiCertificates(encodedPin, function (response, error) {
          if (certType == 1) {
            certData = response.signingCertificate;
          } else {
            certData = response.authenticationCertificate;
          }
          changeButtonState(true);
          readerClass.verifySignature(
            originalData,
            parseInt(dataHashed),
            signedData,
            certData,
            VerifyDataCB
          );
        });
        // changeButtonState(true);
      });
    }
  });
  /* disable all buttons till request is processed */
}
var VerifyDataCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    alert(error.message);
    document.getElementById("verifyDataTxtBx").value = error.message;
    document.getElementById("verifyDataTxtBx").type = "text";
    document.getElementById("verifyDataTxtBx").style.color = "red";
    changeButtonState(false);
    return;
  }
  var resultData = "Verification Successful.";
  document.getElementById("verifyDataTxtBx").value = resultData;
  document.getElementById("verifyDataTxtBx").type = "text";
  document.getElementById("verifyDataTxtBx").style.color = "green";
  changeButtonState(false);
};
/**
 * This function is to reset pin
 */
function pinReset() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("pinResetDiv");
  var result = null;
  var readerName = null;
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  /* disable all buttons till request is processed */
  changeButtonState(true);
  displayProgress("Getting finger indexes...");
  readerClass.getFingerData(function (response, error) {
    if (error !== null) {
      alert(error.message);
      changeButtonState(false);
      return;
    }
    var result = response;
    if ("fail" === result.status) {
      return result.error + " : " + result.description;
    }
    /* set result of getFingerIndex to local variable so that it can be while verifying biometric */
    self.fingerData = result;
    var selectBox = document.getElementById("resetPINFingerSelect");
    if (selectBox.options.length > 1) {
      selectBox.removeChild(selectBox.options[2]);
      selectBox.removeChild(selectBox.options[1]);
    }
    var option1 = document.createElement("option");
    var opt1 = result[0].fingerIndex;
    option1.text = opt1;
    selectBox.add(option1);
    var option2 = document.createElement("option");
    option2.text = result[1].fingerIndex;
    selectBox.add(option2);
    changeButtonState(false);
  });
}
/**
 * This function is to verify biometric
 */
function pinResetSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var pin = document.getElementById("pinResetTxtBx").value;
  if (undefined === pin || "" === pin || pin.length < 4) {
    alert("Please provide valid pin .");
    return;
  }
  var selectedFinger = document.getElementById("resetPINFingerSelect").value;
  if ("Select Finger" == selectedFinger || undefined == selectedFinger) {
    alert("Please select a finger.");
    return;
  }
  /* disable all buttons till request is processed */
  changeButtonState(true);
  displayProgress("Resetting PIN ...");

  var index = 0;
  var indexId = 0;
  /* get finger index from selectedFinger */
  for (let i = 0; i < self.fingerData.length; i++) {
    if (self.fingerData[i].fingerIndex === selectedFinger) {
      index = self.fingerData[i];
      break;
    }
  }
  var sensor_timeout = 30; /*  seconds */
  showLoader();
  PrepareRequest(function (requestHandle) {
    if (requestHandle === undefined || requestHandle === null) {
      var encodedPin = pin;
      readerClass.resetPin(encodedPin, index, sensor_timeout, pinResetCB);
    } else {
      ToolkitOB.getDataProtectionKey(function (response, error) {
        var encodedPin = encodePinOnServer(
          pin,
          requestHandle,
          response.publicKey
        );
        if (encodedPin == -1) {
          hideLoader();
          changeButtonState(false);
          alert("Failed to Encrypt data");
          return;
        }
        readerClass.resetPin(encodedPin, index, sensor_timeout, pinResetCB);
      });
    }
  });
}
var pinResetCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    document.getElementById("pinResetBioTxtBx").style.color = "red";
    document.getElementById("pinResetBioTxtBx").value = error.message;
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
    }
    changeButtonState(false);
    return;
  }
  result = response;
  /* check if there is any error in response */
  document.getElementById("pinResetBioTxtBx").style.color = "green";
  document.getElementById("pinResetBioTxtBx").value = "Successful.";
  document.getElementById("pinResetBioTxtBx").type = "text";
  if (result.xmlString !== null && result.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = result.xmlString;
  }
  /* enable all buttons as request is processed */
  changeButtonState(false);
};
/**
 * This function is used to disconnect web socket connection
 *
 */
function disconnectWS() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  /**
   * call the disconnect reader function and pass disconnectCB to be executed
   * after the response is received from server
   */
  showLoader();
  readerClass.disconnect(disconnectCB);
}
/**
 * disconnect handler call back function.
 * This function is executed when response is received from server for disConnectReader request.
 * This function is passed as a disconnectCB call back function while sending disConnectReader request.
 *
 * @param response describing response from server.
 *  response object has one field 'data' which contains a string in the json format.
 *  This string can be converted to json object by using JSON.parse(response.data);
 *
 */
var disconnectCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    alert(error.message);
    changeButtonState(false);
    return;
  }
  var result = response;
  ToolkitOB.cleanup();
  if ("fail" === result) {
    return result.error + " : " + result.description;
  }
  changeButtonState(false);
};

/**
 * This function is to hide all the divs and only show a div
 * specified by divName
 *
 * @param divName div to show/block
 */
function showDiv(divName) {
  var divs = document.getElementsByClassName("public-data-div");
  for (let i = 0; i <= divs.length - 1; i++) {
    divs[i].style.display = "none";
  }
  if ("" !== divName) {
    document.getElementById(divName).style.display = "block";
    document.getElementById(divName).style.display = "block";
  }
}
/**
 * This function is to change button's accessibility and css class.
 *
 */
function changeButtonState(flag) {
  // if (flag == false) {
  //   if (self.IsNfc) {
  //     document.getElementById("disconnectBtn").disabled = false;
  //     document.getElementById("setNfcParamsBtn").disabled = false;
  //     return;
  //   }
  // }
  // var buttons = document.getElementsByClassName("buttonInitial");
  // for (let i = 0; i <= buttons.length - 1; i++) {
  //   buttons[i].disabled = flag;
  // }
  // if (self.IsNfc === false) {
  //   document.getElementById("setNfcParamsBtn").disabled = true;
  // }
}
/**
 * This function is to display progress in progress box.
 */
function displayProgress(msg) {
  console.log(msg);
}
/**
 * This function is to show unblock pin div
 */
function PinUnblock() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("unBlockPinDiv");
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  changeButtonState(true);
  readerClass.getFingerData(function (response, error) {
    if (error !== null) {
      alert(error.message);
      changeButtonState(false);
      return;
    }
    var result = response;
    if ("fail" === result.status) {
      return result.error + " : " + result.description;
    }
    /* set result of getFingerIndex to local variable so that it can be while verifying biometric */
    self.fingerData = result;
    var selectBox = document.getElementById("unBlockPinFingerSelect");
    if (selectBox.options.length > 1) {
      selectBox.removeChild(selectBox.options[2]);
      selectBox.removeChild(selectBox.options[1]);
    }
    var option1 = document.createElement("option");
    var opt1 = result[0].fingerIndex;
    option1.text = opt1;
    selectBox.add(option1);
    var option2 = document.createElement("option");
    option2.text = result[1].fingerIndex;
    selectBox.add(option2);
    changeButtonState(false);
  });
}

function UnBlockPinSubmit() {
  try {
    var pin = document.getElementById("unBlockPinTxtBx").value;
    if (undefined === pin || "" === pin || pin.length < 4) {
      alert("Please provide valid pin .");
      return;
    }
    var selectedFinger = document.getElementById(
      "unBlockPinFingerSelect"
    ).value;
    if (undefined === selectedFinger || "Select Finger" === selectedFinger) {
      alert("Please select a finger.");
      return;
    }
    displayProgress("Matching biometric ...");
    if (null === readerClass || undefined === readerClass) {
      alert("ERROR : Reader is not initiaized.");
      return;
    }
    var index;
    for (let i = 0; i < self.fingerData.length; i++) {
      if (self.fingerData[i].fingerIndex === selectedFinger) {
        index = self.fingerData[i];
        break;
      }
    }
    showLoader();
    PrepareRequest(function (requestHandle) {
      if (requestHandle === undefined || requestHandle === null) {
        var encodedPin = pin;
        var sensor_timeout = 30; /*  seconds */
        readerClass.unblockPin(
          encodedPin,
          index,
          sensor_timeout,
          function (response, error) {
            hideLoader();
            if (error) {
              if (error.attemptsLeft) {
                error.message =
                  error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
              }
              document.getElementById("unBlockPinBioTxtBx").style.color = "red";
              document.getElementById("unBlockPinBioTxtBx").value =
                error.message || "Failed try again later.";
              document.getElementById("unBlockPinBioTxtBx").type = "text";
              if (
                error.toolkit_response !== null &&
                error.toolkit_response !== undefined
              ) {
                document.getElementById("vxs").style.display = "block";
                self.verifyxmldata = error.toolkit_response;
              }
              return;
            }
            var result = response;
            document.getElementById("unBlockPinBioTxtBx").style.color = "green";
            document.getElementById("unBlockPinBioTxtBx").value = "Successful.";
            document.getElementById("unBlockPinBioTxtBx").type = "text";
            if (result.xmlString !== null && result.xmlString !== undefined) {
              document.getElementById("vxs").style.display = "block";
              self.verifyxmldata = result.xmlString;
            }
            //self.fingerData = null;
            /* enable all buttons as request is processed */
            changeButtonState(false);
          }
        );
      } else {
        ToolkitOB.getDataProtectionKey(function (response, error) {
          var encodedPin = encodePinOnServer(
            pin,
            requestHandle,
            response.publicKey
          );
          if (encodedPin == -1) {
            hideLoader();
            changeButtonState(false);
            alert("Failed to Encrypt data");
            return;
          }
          var sensor_timeout = 30; /*  seconds */
          readerClass.unblockPin(
            encodedPin,
            index,
            sensor_timeout,
            function (response, error) {
              hideLoader();
              if (error) {
                if (error.attemptsLeft) {
                  error.message =
                    error.message +
                    "   " +
                    "Attemptsleft:" +
                    error.attemptsLeft;
                }
                document.getElementById("unBlockPinBioTxtBx").style.color =
                  "red";
                document.getElementById("unBlockPinBioTxtBx").value =
                  error.message || "Failed try again later.";
                document.getElementById("unBlockPinBioTxtBx").type = "text";
                if (
                  error.toolkit_response !== null &&
                  error.toolkit_response !== undefined
                ) {
                  document.getElementById("vxs").style.display = "block";
                  self.verifyxmldata = error.toolkit_response;
                }
                return;
              }
              var result = response;
              document.getElementById("unBlockPinBioTxtBx").style.color =
                "green";
              document.getElementById("unBlockPinBioTxtBx").value =
                "Successful.";
              document.getElementById("unBlockPinBioTxtBx").type = "text";
              if (result.xmlString !== null && result.xmlString !== undefined) {
                document.getElementById("vxs").style.display = "block";
                self.verifyxmldata = result.xmlString;
              }
              //self.fingerData = null;
              /* enable all buttons as request is processed */
              changeButtonState(false);
            }
          );
        });
      }
    });
  } catch (e) {
    hideLoader();
    return "An exception occured in unblockPIN." + e;
  }
}

/**
 * This function is to show card genuine div
 */
function CardGenuine() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  showDiv("cardGenuineDiv");
  /*  disable all buttons till request is processe */
  changeButtonState(true);
  showLoader();
  var randomStr = generateRandomString(40);
  var requestId = btoa(randomStr);
  readerClass.isCardGenuine(requestId, CardGenuineCB);
}
var CardGenuineCB = function (response, error) {
  hideLoader();
  if (null !== error) {
    document.getElementById("cardGenuineTxtBx").style.color = "red";
    document.getElementById("cardGenuineTxtBx").value =
      "Failed. : " + error.message;
    document.getElementById("cardGenuineTxtBx").type = "text";
    changeButtonState(false);
    return;
  }
  result = JSON.parse(response.data);
  /*  display success message */
  document.getElementById("cardGenuineTxtBx").style.color = "green";
  document.getElementById("cardGenuineTxtBx").value = "Successful.";
  document.getElementById("cardGenuineTxtBx").type = "text";
  /*  reset the fingerData to null */
  self.fingerData = null;
  /*  enable all buttons as request is processed */
  changeButtonState(false);
};

function signDSSTypes() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("signDSSDiv");
}
function verifyDSSTypes() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("verifyDSSDiv");
}

function SignXMLFunc() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("signXADESDiv");
}

function SignXMLSubmit() {
  try {
    var xmlFilePath = document.getElementById("signXADESinputTxtBx").value;
    var signedXmlFilePath = document.getElementById(
      "signXADESouputTxtBx"
    ).value;
    signingContext.signatureLevel = document.getElementById(
      "signatureLevelSelect"
    ).value;
    signingContext.packagingMode =
      document.getElementById("pkgModeSelect").value;
    signingContext.userPin = document.getElementById("pinTxtBx").value;
    signingContext.tsaUrl = document.getElementById("tsaUrlTxtBx").value;
    signingContext.ocspUrl = document.getElementById("ocspUrlTxtBx").value;
    signingContext.certPath = document.getElementById("certPathTxtBx").value;
    signingContext.countryCode = document.getElementById("countryTxtBx").value;
    signingContext.locality = document.getElementById("localityTxtBx").value;
    signingContext.postalCode =
      document.getElementById("postalCodeTxtBx").value;
    signingContext.stateOrProvince =
      document.getElementById("stateTxtBx").value;
    signingContext.street = document.getElementById("streetTxtBx").value;
    if (undefined === xmlFilePath || "" === xmlFilePath) {
      alert("Please provide valid file path .");
      return;
    }
    if (
      undefined === signingContext.userPin ||
      "" === signingContext.userPin ||
      signingContext.userPin < 4
    ) {
      alert("Please provide pin .");
      return;
    }
    if (signingContext.packagingMode !== "3") {
      if (undefined === signedXmlFilePath || "" === signedXmlFilePath) {
        alert("Please provide valid file path .");
        return;
      }
    }
    if (null === readerClass || undefined === readerClass) {
      alert("ERROR : Websocket is not initilaized.");
      return;
    }
    showLoader();
    PrepareRequest(function (requestHandle) {
      if (requestHandle === undefined || requestHandle === null) {
        var encodedPin = signingContext.userPin;
        displayProgress("Signing...");
        signingContext.userPin = encodedPin;
        readerClass.xadesSign(
          signingContext,
          xmlFilePath,
          signedXmlFilePath,
          SignXMLCB
        );
      } else {
        ToolkitOB.getDataProtectionKey(function (response, error) {
          var encodedPin = encodePinOnServer(
            signingContext.userPin,
            requestHandle,
            response.publicKey
          );
          if (encodedPin == -1) {
            hideLoader();
            changeButtonState(false);
            alert("Failed to Encrypt data");
            return;
          }
          displayProgress("Signing...");
          signingContext.userPin = encodedPin;
          readerClass.xadesSign(
            signingContext,
            xmlFilePath,
            signedXmlFilePath,
            SignXMLCB
          );
        });
      }
    });
  } catch (e) {
    hideLoader();
    return "An exception occured ." + e;
  }
}

var SignXMLCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    alert(error.message);
    document.getElementById("signXADESResultTxtBx").style.display = null;
    document.getElementById("signXADESResultTxtBx").style.color = "red";
    document.getElementById("signXADESResultTxtBx").innerHTML = error.message;
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
    }
    return;
  }

  document.getElementById("signXADESResultTxtBx").style.color = "green";
  document.getElementById("signXADESResultTxtBx").innerHTML =
    response.sign_data;
  document.getElementById("signXADESResultTxtBx").style.display = null;
  /* enable all buttons as request is processed */
  if (
    response.toolkit_response !== null &&
    response.toolkit_response !== undefined
  ) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = response.toolkit_response;
  }
  changeButtonState(false);
};
function VerifyXMLFunc() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("verifyXADESDiv");
}

function VerifyXMlSubmit() {
  try {
    if (null === readerClass || undefined === readerClass) {
      alert("ERROR : Reader is not initiaized.");
      return;
    }
    var signedXmlFilePath = document.getElementById(
      "verifyXADESTxtinputBx"
    ).value;
    verificationContext.ocspPath = document.getElementById(
      "verifyXADESocspUrlTxtBx"
    ).value;
    verificationContext.certPath = document.getElementById(
      "verifyXADEScertPathTxtBx"
    ).value;
    var signature = document.getElementById("verifyXADESSignedDtBx").value;
    verificationContext.packagingMode = document.getElementById(
      "XVerifypkgModeSelect"
    ).value;
    verificationContext.report_type = document.getElementById(
      "SVerifyReportSelect"
    ).value;
    if (
      undefined === verificationContext.report_type ||
      "" === verificationContext.report_type
    ) {
      alert("Please select report type.");
      return;
    }
    if (undefined === signedXmlFilePath || "" === signedXmlFilePath) {
      alert("Please provide valid file path .");
      return;
    }
    verificationContext.detachedValue = 0;
    if (verificationContext.packagingMode == 3) {
      verificationContext.detachedValue = 1;
      if (undefined === signature || "" === signature) {
        alert("Please provide valid Signed data .");
        return;
      }
    } else {
      signature = null;
    }
    displayProgress("Verifying...");
    showLoader();
    var ret = readerClass.xadesVerify(
      verificationContext,
      signedXmlFilePath,
      signature,
      VerifyXMlSubmitCB
    );
    return;
  } catch (e) {
    return "An exception occured when reading public data." + e;
  }
}

var VerifyXMlSubmitCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    alert(error.message);
    changeButtonState(false);
    document.getElementById("verifyXADESResultTxtBx").style.display = null;
    document.getElementById("verifyXADESResultTxtBx").value = error.message;
    return;
  }
  document.getElementById("verifyXADESResultTxtBx").style.color = "green";
  document.getElementById("verifyXADESResultTxtBx").style.display = null;
  document.getElementById("verifyXADESResultTxtBx").value = response;
  changeButtonState(false);
};

function SignPDFFunc() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("signPADESDiv");
}

function SignPDFSubmit() {
  try {
    if (null === readerClass || undefined === readerClass) {
      alert("ERROR : Reader is not initiaized.");
      return;
    }
    var pdfFilePath = document.getElementById("signPADESinputTxtBx").value;
    var signedPdfFilePath = document.getElementById(
      "signPADESouputTxtBx"
    ).value;
    signingContext.signatureLevel = document.getElementById(
      "PsignatureLevelSelect"
    ).value;
    signingContext.packagingMode =
      document.getElementById("PpkgModeSelect").value;
    signingContext.userPin = document.getElementById("PpinTxtBx").value;
    signingContext.tsaUrl = document.getElementById("PtsaUrlTxtBx").value;
    signingContext.ocspUrl = document.getElementById("PocspUrlTxtBx").value;
    signingContext.certPath = document.getElementById("PcertPathTxtBx").value;
    signingContext.countryCode = document.getElementById("PcountryTxtBx").value;
    signingContext.locality = document.getElementById("PlocalityTxtBx").value;
    signingContext.postalCode =
      document.getElementById("PpostalCodeTxtBx").value;
    signingContext.stateOrProvince =
      document.getElementById("PstateTxtBx").value;
    signingContext.street = document.getElementById("PstreetTxtBx").value;
    signingContext.signNmPositionSelect = document.getElementById(
      "signNmPositionSelect"
    ).value;
    signingContext.sigVisibleSelect =
      document.getElementById("sigVisibleSelect").value;
    signingContext.pgNumberTxtBx =
      document.getElementById("pgNumberTxtBx").value;
    signingContext.sigTextTxtBx = document.getElementById("sigTextTxtBx").value;
    signingContext.fontNameTxtBx =
      document.getElementById("fontNameTxtBx").value;
    signingContext.fontSizeTxtBx =
      document.getElementById("fontSizeTxtBx").value;
    signingContext.fontColorTxtBx =
      document.getElementById("fontColorTxtBx").value;
    signingContext.bgColorTxtBx = document.getElementById("bgColorTxtBx").value;
    signingContext.sigImgPathTxtBx =
      document.getElementById("sigImgPathTxtBx").value;
    signingContext.sigYaxisTxtBx =
      document.getElementById("sigYaxisTxtBx").value;
    signingContext.sigXaxisTxtBx =
      document.getElementById("sigXaxisTxtBx").value;
    signingContext.signerContactInfoTxtBx = document.getElementById(
      "signerContactInfoTxtBx"
    ).value;
    signingContext.signerLocationTxtBx = document.getElementById(
      "signerLocationTxtBx"
    ).value;
    signingContext.reasonSignTxtBx =
      document.getElementById("reasonSignTxtBx").value;
    if (undefined === pdfFilePath || "" === pdfFilePath) {
      alert("Please provide valid file path .");
      return;
    }
    if (undefined === signedPdfFilePath || "" === signedPdfFilePath) {
      alert("Please provide valid file path .");
      return;
    }
    if (
      undefined === signingContext.userPin ||
      "" === signingContext.userPin ||
      signingContext.userPin < 4
    ) {
      alert("Please provide pin .");
      return;
    }
    /* check output file path only if packing mode is not detached */
    if (signingContext.packagingMode !== "3") {
    }
    showLoader();
    PrepareRequest(function (requestHandle) {
      if (requestHandle === undefined || requestHandle === null) {
        var encodedPin = signingContext.userPin;
        displayProgress("Signing...");
        signingContext.userPin = encodedPin;
        readerClass.padesSign(
          signingContext,
          pdfFilePath,
          signedPdfFilePath,
          SignPDFSubmitCB
        );
      } else {
        ToolkitOB.getDataProtectionKey(function (response, error) {
          var encodedPin = encodePinOnServer(
            signingContext.userPin,
            requestHandle,
            response.publicKey
          );
          if (encodedPin == -1) {
            hideLoader();
            changeButtonState(false);
            alert("Failed to Encrypt data");
            return;
          }
          displayProgress("Signing...");
          signingContext.userPin = encodedPin;
          readerClass.padesSign(
            signingContext,
            pdfFilePath,
            signedPdfFilePath,
            SignPDFSubmitCB
          );
        });
      }
    });
  } catch (e) {
    hideLoader();
    alert(e.message);
  }
}
var SignPDFSubmitCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    alert(error.message);
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
    }
    document.getElementById("signPADESResultTxtBx").style.display = null;
    document.getElementById("signPADESResultTxtBx").innerHTML = error.message;
    changeButtonState(false);
    return;
  }
  document.getElementById("signPADESResultTxtBx").style.color = "green";
  document.getElementById("signPADESResultTxtBx").style.display = null;
  document.getElementById("signPADESResultTxtBx").innerHTML = response.status;
  /* enable all buttons as request is processed */
  if (
    response.toolkit_response !== null &&
    response.toolkit_response !== undefined
  ) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = response.toolkit_response;
  }
  changeButtonState(false);
};

function VerifyPDFFunc() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("verifyPADESDiv");
}

function VerifyPDFSubmit() {
  try {
    if (null === readerClass || undefined === readerClass) {
      alert("ERROR : Reader is not initiaized.");
      return;
    }
    var signedPdfFilePath = document.getElementById(
      "verifyPADESTxtinputBx"
    ).value;
    verificationContext.ocspPath = document.getElementById(
      "verifyPADESocspUrlTxtBx"
    ).value;
    verificationContext.certPath = document.getElementById(
      "verifyPADEScertPathTxtBx"
    ).value;
    verificationContext.packagingMode = document.getElementById(
      "PVerifypkgModeSelect"
    ).value;
    verificationContext.report_type = document.getElementById(
      "PVerifyReportSelect"
    ).value;
    if (
      undefined === verificationContext.report_type ||
      "" === verificationContext.report_type
    ) {
      alert("Please select report type.");
      return;
    }
    if (undefined === signedPdfFilePath || "" === signedPdfFilePath) {
      alert("Please provide valid file path .");
      return;
    }
    verificationContext.detachedValue = 0;
    if (verificationContext.packaging_mode == 3) {
      verificationContext.detachedValue = 1;
      if (
        undefined === verificationContext.signedData ||
        "" === verificationContext.signedData
      ) {
        alert("Please provide valid Signed data .");
        return;
      }
    }
    displayProgress("Verifying...");
    showLoader();
    readerClass.padesVerify(
      verificationContext,
      signedPdfFilePath,
      VerifyPDFCB
    );
  } catch (e) {
    hideLoader();
    alert(e.message);
    return "An exception occured when reading public data." + e;
  }
}
var VerifyPDFCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    alert(error.message);
    document.getElementById("verifyPADESResultTxtBx").style.display = null;
    document.getElementById("verifyPADESResultTxtBx").style.color = "red";
    document.getElementById("verifyPADESResultTxtBx").value = error.message;
    changeButtonState(false);
    return;
  }
  document.getElementById("verifyPADESResultTxtBx").style.color = "green";
  document.getElementById("verifyPADESResultTxtBx").style.display = null;
  document.getElementById("verifyPADESResultTxtBx").value = response;
  changeButtonState(false);
};

function SignOtrFile() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("signCADESDiv");
}

function SignOtrFileSubmit() {
  try {
    if (null === readerClass || undefined === readerClass) {
      alert("ERROR : Reader is not initiaized.");
      return;
    }
    var inputFilePath = document.getElementById("signCADESinputTxtBx").value;
    signingContext.signatureLevel = document.getElementById(
      "CsignatureLevelSelect"
    ).value;
    signingContext.packagingMode =
      document.getElementById("CSignpkgModeSelect").value;
    signingContext.userPin = document.getElementById("CpinTxtBx").value;
    signingContext.tsaUrl = document.getElementById("CtsaUrlTxtBx").value;
    signingContext.ocspUrl = document.getElementById("CocspUrlTxtBx").value;
    signingContext.certPath = document.getElementById("CcertPathTxtBx").value;
    signingContext.countryCode = document.getElementById("CcountryTxtBx").value;
    signingContext.locality = document.getElementById("ClocalityTxtBx").value;
    signingContext.postalCode =
      document.getElementById("CpostalCodeTxtBx").value;
    signingContext.stateOrProvince =
      document.getElementById("CstateTxtBx").value;
    signingContext.street = document.getElementById("CstreetTxtBx").value;
    if (undefined === inputFilePath || "" === inputFilePath) {
      alert("Please provide valid file path .");
      return;
    }
    if (
      undefined === signingContext.userPin ||
      "" === signingContext.userPin ||
      signingContext.userPin < 4
    ) {
      alert("Please provide pin .");
      return;
    }
    signingContext.packagingMode = 3;
    showLoader();
    PrepareRequest(function (requestHandle) {
      if (requestHandle === undefined || requestHandle === null) {
        var encodedPin = signingContext.userPin;
        displayProgress("Signing...");
        signingContext.userPin = encodedPin;
        readerClass.cadesSign(signingContext, inputFilePath, SignOtrFileCB);
      } else {
        ToolkitOB.getDataProtectionKey(function (response, error) {
          var encodedPin = encodePinOnServer(
            signingContext.userPin,
            requestHandle,
            response.publicKey
          );
          if (encodedPin == -1) {
            hideLoader();
            changeButtonState(false);
            alert("Failed to Encrypt data");
            return;
          }
          displayProgress("Signing...");
          signingContext.userPin = encodedPin;
          readerClass.cadesSign(signingContext, inputFilePath, SignOtrFileCB);
        });
      }
    });
  } catch (e) {
    hideLoader();
    alert(e.message);
    return "An exception occured when reading public data." + e;
  }
}
var SignOtrFileCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    alert(error.message);
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
    }
    document.getElementById("signCADESResultTxtBx").style.display = null;
    document.getElementById("signCADESResultTxtBx").innerHTML = error.message;
    changeButtonState(false);
    return;
  }
  document.getElementById("verifyPADESResultTxtBx").style.color = "green";
  document.getElementById("signCADESResultTxtBx").style.display = null;
  document.getElementById("signCADESResultTxtBx").value = response.sign_data;
  if (
    response.toolkit_response !== null &&
    response.toolkit_response !== undefined
  ) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = response.toolkit_response;
  }
  /* enable all buttons as request is processed */
  changeButtonState(false);
};

function VerifyOtrFile() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("verifyCADESDiv");
}

function VerifyOtrFileSubmit() {
  try {
    if (null === readerClass || undefined === readerClass) {
      alert("ERROR : Reader is not initiaized.");
      return;
    }
    var inputFilePath = document.getElementById("verifyCADESTxtinputBx").value;
    verificationContext.ocspPath = document.getElementById(
      "verifyCADESocspUrlTxtBx"
    ).value;
    verificationContext.certPath = document.getElementById(
      "verifyCADEScertPathTxtBx"
    ).value;
    var signature = document.getElementById(
      "verifyCADESSignDataPathTxtBx"
    ).value;
    verificationContext.report_type = document.getElementById(
      "CVerifyReportSelect"
    ).value;
    if (
      undefined === verificationContext.report_type ||
      "" === verificationContext.report_type
    ) {
      alert("Please select report type.");
      return;
    }
    if (undefined === inputFilePath || "" === inputFilePath) {
      alert("Please provide valid file path .");
      return;
    }
    if (undefined === signature || "" === signature) {
      alert("Please provide valid valid signed data .");
      return;
    }
    verificationContext.detached = 1;
    displayProgress("Verifying...");
    showLoader();
    readerClass.cadesVerify(
      verificationContext,
      inputFilePath,
      signature,
      VerifyOtrFileCB
    );
  } catch (e) {
    return "An exception occured when reading public data." + e;
  }
}
var VerifyOtrFileCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    alert(error.message);
    document.getElementById("verifyCADESResultTxtBx").style.display = null;
    document.getElementById("verifyCADESResultTxtBx").style.color = "red";
    document.getElementById("verifyCADESResultTxtBx").value = error.message;
    changeButtonState(false);
    return;
  }
  document.getElementById("verifyCADESResultTxtBx").style.color = "green";
  document.getElementById("verifyCADESResultTxtBx").style.display = null;
  document.getElementById("verifyCADESResultTxtBx").value = response;
  /* enable all buttons as request is processed */
  changeButtonState(false);
};

function DisplayFamilyBookDataN() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("familyBookDiv");
}

function familyBkDtPinSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var pin = document.getElementById("familyBkDtPinTxtBx").value;
  if (undefined === pin || "" === pin || pin < 4) {
    alert("Please provide valid pin .");
    return;
  }
  displayProgress("Reading Family Book Data...");
  showLoader();
  PrepareRequest(function (requestHandle) {
    if (requestHandle === undefined || requestHandle === null) {
      var encodedPin = pin;
      displayProgress("fetching family book data");
      readerClass.readFamilyBookData(encodedPin, familyBkDtPinSubmitCB);
    } else {
      ToolkitOB.getDataProtectionKey(function (response, error) {
        var encodedPin = encodePinOnServer(
          pin,
          requestHandle,
          response.publicKey
        );
        if (encodedPin == -1) {
          hideLoader();
          changeButtonState(false);
          alert("Failed to Encrypt data");
          return;
        }
        displayProgress("fetching family book data");
        readerClass.readFamilyBookData(encodedPin, familyBkDtPinSubmitCB);
      });
    }
    /* call readFamilyBook	 */
  });
}
var familyBkDtPinSubmitCB = function (response, error) {
  if (response === null) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    hideLoader();
    alert(error.message);
    changeButtonState(false);
    return;
  }
  document.getElementById("dispalyfmaily").style.display = null;
  if (null !== error) {
    alert(error.message);
    changeButtonState(false);
    return;
  }
  dataBindDom(response.HeadOfFamily, "headOfFamData");
  for (let i = 0; i < response.wives.length; i++) {
    dataBindDom(response.wives[i], "famWifeData");
  }
  for (let i = 0; i < response.children.length; i++) {
    dataBindDom(response.children[i], "famChildData");
  }
  if (response.xmlString !== null && response.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = response.xmlString;
  }
  /* enable all buttons as request is processed */
  changeButtonState(false);
  hideLoader();
};

var prepareRequestCB = function (response, error) {
  var userName = prompt("enter username", "");
  var password = prompt("password", "");
  var deviceRefID = prompt("Device Reference Id", "");
  if (null == error) {
    var requestHandle = response;
    if (requestHandle == null || requestHandle == undefined) {
      var userNameEncoded = userName;
      var passwordEncoded = password;
      ToolkitOB.registerDevice(
        userNameEncoded,
        passwordEncoded,
        deviceRefID,
        registerDeviceCB
      );
    } else {
      ToolkitOB.getDataProtectionKey(
        function (response, error) {
          var userNameEncoded = encryptParamasOnServer(
            userName,
            requestHandle,
            response.publicKey
          );
          var passwordEncoded = encryptParamasOnServer(
            password,
            requestHandle,
            response.publicKey
          );
          ToolkitOB.registerDevice(
            userNameEncoded,
            passwordEncoded,
            deviceRefID,
            registerDeviceCB
          );
        } // cb
      ); // getDataProtectionKey()
    }
  } else {
    hideLoader();
    alert(error.message);
  }
};

function pkgModeSelectChange() {
  document.getElementById("signedFileDivXADES").style.display = "block";
  var packaging_mode = document.getElementById("pkgModeSelect").value;
  if (packaging_mode == 3) {
    document.getElementById("signedFileDivXADES").style.display = "none";
  }
}

function XVerifypkgModeSelectChange() {
  var packaging_mode = document.getElementById("XVerifypkgModeSelect").value;
  document.getElementById("XverifyInSignedDtDiv").style.display = "none";
  if (packaging_mode == 3) {
    document.getElementById("XverifyInSignedDtDiv").style.display = "block";
    document.getElementById("verifyXADESLbl").innerHTML =
      "Enter original file path :";
  } else {
    document.getElementById("verifyXADESLbl").innerHTML =
      "Enter XML Signed File Path <br> (with file name and extension) : &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  }
}

function ToolkitVersion() {
  if (null === readerClass || undefined === readerClass) {
    alert("The Webcomponent is not initialized.");
    return;
  }
  showLoader();
  ToolkitOB.getToolkitVersion(ToolkitVersionCB);
}
var ToolkitVersionCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    alert(error.message);
    changeButtonState(false);
    return;
  }
  var result = response;
  if ("Fail" === result.status) {
    alert(
      "Error while getting Toolkit Version :" +
        result.error +
        " : " +
        result.description
    );
  }
  // var str = result.etc_major + "." +
  // 	result.etc_minor + "." +
  // 	result.etc_patch;
  alert("Toolkit Version :" + result);
};

function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
var registerDeviceCB = function (response, error) {
  hideLoader();
  if (null !== response) {
    alert(
      "Registration Successfull Your ID is:" + response.deviceRegistrationID
    );
  } else {
    alert(error.description || error.message);
  }
};

function registerDevice() {
  /* generate the random string */
  var randomStr = generateRandomString(40);
  /*  convert randomString to base64 */
  var requestId = btoa(randomStr);
  showLoader();
  ToolkitOB.prepareRequest(requestId, prepareRequestCB);
}

function NFCAuth() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("setNfcParamsDiv");
}

function NFCAuthSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  changeButtonState(true);
  var radios = document.getElementsByName("nfcgroup");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      if (radios[i].value === "cdetails") {
        var cardnumber = document.getElementById("NfcParamscardNum").value;
        if (cardnumber == null || cardnumber == undefined) {
          alert("enter card number");
        }
        var dob = document.getElementById("NfcParamsDOB").value;
        if (dob == null || dob == undefined) {
          alert("enter valid date");
        }
        var expirydate = document.getElementById("NfcParamsED").value;
        if (expirydate == null || expirydate == undefined) {
          alert("enter valid date");
        }
        showLoader();
        readerClass.setNfcAuthenticationParameters(
          cardnumber,
          dob,
          expirydate,
          NFCAuthCB
        );
      } else {
        showLoader();
        var mzrData = document.getElementById("NfcParamsmrzData").value;
        readerClass.setNfcAuthenticationParameters(mzrData, NFCAuthCB);
      }
      break;
    }
  }
}
var NFCAuthCB = function (response, error) {
  hideLoader();
  if (error) {
    changeButtonState(false);
    alert(error.message);
    self.IsNfc = true;
    changeButtonState(false);
    return;
  }
  showDiv("showNFCParamsDiv");
  document.getElementById("nfcStatusTxtBx").style.color = "green";
  document.getElementById("nfcStatusTxtBx").value = response;
  nfcMenu();
};

function deviceId() {
  if (null === ToolkitOB || undefined === ToolkitOB) {
    alert("ERROR : Application is not initiaized.");
    return;
  }
  changeButtonState(true);
  ToolkitOB.getDeviceId(deviceIdCB);
}
var deviceIdCB = function (response, error) {
  if (error) {
    changeButtonState(false);
    alert(error.message);
    // self.IsNfc = true;
    changeButtonState(false);
    return;
  }
  changeButtonState(false);
  alert(response);
};

function MatchOnCard() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("matchOncardDiv");
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  changeButtonState(true);
  readerClass.getFingerData(function (response, error) {
    if (error !== null) {
      alert(error.message);
      changeButtonState(false);
      return;
    }
    var result = response;
    if ("fail" === result.status) {
      return result.error + " : " + result.description;
    }
    /* set result of getFingerIndex to local variable so that it can be while verifying biometric */
    self.fingerData = result;
    var selectBox = document.getElementById("matchonPinFingerSelect");
    if (selectBox.options.length > 1) {
      selectBox.removeChild(selectBox.options[2]);
      selectBox.removeChild(selectBox.options[1]);
    }
    var option1 = document.createElement("option");
    var opt1 = result[0].fingerIndex;
    option1.text = opt1;
    selectBox.add(option1);
    var option2 = document.createElement("option");
    option2.text = result[1].fingerIndex;
    selectBox.add(option2);
    changeButtonState(false);
  });
}

function MatchOnCardSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var selectedFinger = document.getElementById("matchonPinFingerSelect").value;
  if (undefined === selectedFinger || "Select Finger" === selectedFinger) {
    alert("Please select a finger.");
    return;
  }
  displayProgress("Matching biometric ...");
  var index;
  for (let i = 0; i < self.fingerData.length; i++) {
    if (self.fingerData[i].fingerIndex === selectedFinger) {
      index = self.fingerData[i];
      break;
    }
  }
  showLoader();
  var randomStr = generateRandomString(40);
  var requestId = btoa(randomStr);
  var sensor_timeout = 30; /*  seconds */
  readerClass.matchOnCard(requestId, index, sensor_timeout, MatchOnCardCB);
}
var MatchOnCardCB = function (response, error) {
  hideLoader();
  if (error) {
    if (error.attemptsLeft) {
      error.message =
        error.message + "   " + "Attemptsleft:" + error.attemptsLeft;
    }
    document.getElementById("matchonPinBioTxtBx").style.color = "red";
    document.getElementById("matchonPinBioTxtBx").value =
      error.message || "Failed try again later.";
    document.getElementById("matchonPinBioTxtBx").type = "text";
    return;
  }
  var result = response;
  document.getElementById("matchonPinBioTxtBx").style.color = "green";
  document.getElementById("matchonPinBioTxtBx").value = "Successful.";
  document.getElementById("matchonPinBioTxtBx").type = "text";
  self.fingerData = null;
  /* enable all buttons as request is processed */
  changeButtonState(false);
};

function setVerifyXml() {
  verifyXML(self.verifyxmldata);
}

function removeTable() {
  var tbl = document.getElementById("verifyxmltbl");
  if (tbl) tbl.parentNode.removeChild(tbl);
}

function verifyXML(xml) {
  var ValidateXML = verifyXMlOnServer(xml);
  // var msgbox = document.getElementById('verifyxmlmsg');
  if (ValidateXML.status === "SUCCESS") {
    document.getElementById("res").style.display = "block";
    document.getElementById("res").value = ValidateXML.message;
    document.getElementById("res").style.color = "Green";
  } else {
    // alert(ValidateXML);
    document.getElementById("res").style.display = "block";
    document.getElementById("res").value = ValidateXML.message;
    document.getElementById("res").style.color = "red";
  }
}

function getEidaDate(value) {
  var dates = value.split("-");
  dates[0] = dates[0].slice(-2);
  value = dates.join("");
  return value;
}

function PrepareRequest(callback) {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var randomStr = generateRandomString(40);
  var requestId = btoa(randomStr);
  readerClass.prepareRequest(requestId, function (response, error) {
    if (null == error) {
      var requestHandle = response;
      callback(requestHandle);
    } else {
      console.log(error);
      hideLoader();
      alert(error.message);
      // throw error
    }
  });
}
/**
 * This function is used to display public data on page
 */
function displayData(response, div) {
  console.log(response);
  document.getElementById("IDNumber_data").innerHTML =
    response.iDNumber.fontsize(3);
  document.getElementById("CardNumberdata").innerHTML =
    response.cardNumber.fontsize(3);
  document.getElementById("Cardsl_no").innerHTML =
    response.cardSerialNumber.fontsize(3);
  document.getElementById("pubphoto").src =
    "data:image/bmp;base64," + response.cardHolderPhoto;
  dataBindDom(response.nonModifiablePublicData, "nmd-DataTable");
  dataBindDom(response.modifiablePublicData, "md-DataTable");

  if (!self.IsNfc) {
    dataBindDom(response.homeAddress, "hm_address_data");
    dataBindDom(response.workAddress, "wrk_address_data");
  } else {
    var address1 = document.getElementById("hm_address_data");
    var address2 = document.getElementById("wrk_address_data");
    address1.style.display = "none";
    address2.style.display = "none";
    address1.style.display = null;
    address2.style.display = null;
  }
  showDiv("readPublicDataDiv");
  if (self.IsNfc) {
    nfcMenu();
  }
}

function dataBindDom(response, id) {
  var div = document.getElementById(id);
  for (let key in response) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let lbl1 = document.createElement("label");
    var key1 = key.fontsize(4);
    lbl1.innerHTML = key1;
    td1.appendChild(lbl1);
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    let lbl2 = document.createElement("label");
    var key2 =
      Object.keys(response[key] ? response[key] : "").length === 0
        ? "---"
        : response[key];
    key2 = key2.fontsize(3);
    lbl2.innerHTML = key2;
    td2.appendChild(lbl2);
    tr.appendChild(td2);
    div.appendChild(tr);
  }
}
Object.keys = function (obj) {
  var keys = [];

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      keys.push(i);
    }
  }
  return keys;
};

function hidetable(val) {
  document.getElementById(val).style.display = "none";
}

function showtable(val) {
  document.getElementById(val).style.display = null;
}

function encodePinOnServer(pin, requestHandle, publicKey) {
  try {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", javaService + "ToolkitController/pki/encode", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    var ENCODE_PIN = {
      pin: pin,
      requestHandle: requestHandle,
      publicKey: publicKey,
    };
    var request = JSON.stringify(ENCODE_PIN);
    xhttp.send(request);
    var response = xhttp.responseText;
    response = JSON.parse(response);

    return response.message;
  } catch (e) {
    console.log("error =" + e);
  }
  return "-1";
}

function verifyXMlOnServer(xml) {
  try {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", javaService + "ToolkitController/pki/verify", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    var ENCODE_PIN = {
      strXML: xml,
    };
    var request = JSON.stringify(ENCODE_PIN);
    xhttp.send(request);
    var response = xhttp.responseText;
    response = JSON.parse(response);
    return response;
  } catch (e) {
    console.log("error =" + e);
  }
  return "-1";
}

function encryptParamasOnServer(data, requestHandle, publicKey) {
  try {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", javaService + "ToolkitController/pki/encrypt", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    var ENCRYPT_DATA = {
      userName: data,
      requestHandle: requestHandle,
      publicKey: publicKey,
    };
    var request = JSON.stringify(ENCRYPT_DATA);
    xhttp.send(request);
    var response = xhttp.responseText;
    response = JSON.parse(response);
    return response.message;
  } catch (e) {
    console.log("error =" + e);
  }
  return "-1";
}

function showLoader() {
  var cols = document.getElementsByClassName("custom-container-fluid");
  for (let i = 0; i < cols.length; i++) {
    cols[i].style.display = null;
  }
}

function hideLoader() {
  var cols = document.getElementsByClassName("custom-container-fluid");
  for (let i = 0; i < cols.length; i++) {
    cols[i].style.display = "none";
  }
}

function parseMRZ() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("parseMRZDiv");
}

function parseMRZData() {
  var data = document.getElementById("mrzdatatxtbox").value;
  changeButtonState(true);
  ToolkitOB.parseMRZ(data, parseMRZCB);
}

var parseMRZCB = function (result, error) {
  if (error) {
    showDiv("parseMRZResult");
    changeButtonState(false);
    alert(error.message);
    // self.IsNfc = true;
    changeButtonState(false);
    return;
  }
  changeButtonState(false);
  showDiv("parseMRZResult");
  document.getElementById("mrzCardNumber").innerHTML = result.cardnumber;
  document.getElementById("mrzIdNumber").innerHTML = result.idnumber;
  document.getElementById("mrzFullName").innerHTML = result.fullname;
  document.getElementById("mrzGender").innerHTML = result.gender;
  document.getElementById("mrzDateOfBirth").innerHTML = result.dob;
  document.getElementById("mrzcardExpiryDate").innerHTML =
    result.card_expiry_date;
  document.getElementById("mrzDocumenType").innerHTML = result.document_type;
  document.getElementById("mrzNationality").innerHTML = result.nationality;
  document.getElementById("mrzIssuedcountry").innerHTML = result.issued_country;
};
function VerifyBioandCard() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  showDiv("verifyBioandCardDiv");
  changeButtonState(true);
  showLoader();
  readerClass.getFingerData(function (response, error) {
    hideLoader();
    if (error !== null) {
      alert(error.message);
      changeButtonState(false);
      return;
    }
    var result = response;
    if ("fail" === result.status) {
      return result.error + " : " + result.description;
    }
    /* set result of getFingerIndex to local variable so that it can be while verifying biometric */
    self.fingerData = result;
    var selectBox = document.getElementById("verifyBioandCardFingerSelect");
    if (selectBox.options.length > 1) {
      selectBox.removeChild(selectBox.options[2]);
      selectBox.removeChild(selectBox.options[1]);
    }
    var option1 = document.createElement("option");
    var opt1 = result[0].fingerIndex;
    option1.text = opt1;
    selectBox.add(option1);
    var option2 = document.createElement("option");
    option2.text = result[1].fingerIndex;
    selectBox.add(option2);
    changeButtonState(false);
  });
}
function VerifyBioandCardSubmit() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var selectedFinger = document.getElementById(
    "verifyBioandCardFingerSelect"
  ).value;
  if ("Select Finger" == selectedFinger || undefined == selectedFinger) {
    alert("Please select a finger.");
    return;
  }
  /*  disable all buttons till request is processe */
  changeButtonState(true);
  showLoader();
  displayProgress("Verifying biometric and Card ...");
  var sensor_timeout = 30; /* seconds */
  var randomStr = generateRandomString(40);
  var requestId = btoa(randomStr);
  readerClass.authenticateBiometricandCardOnServer(
    requestId,
    selectedFinger,
    sensor_timeout,
    VerifyBioandCardCB
  );
}
var VerifyBioandCardCB = function (response, error) {
  hideLoader();
  if (null !== error) {
    changeButtonState(false);
    document.getElementById("verifyBioandCardTxtBx").style.color = "red";
    document.getElementById("verifyBioandCardTxtBx").value = error.message;
    document.getElementById("verifyBioandCardTxtBx").type = "text";
    document.getElementById("BioandCardTxtXMlrow").style.display = null;
    document.getElementById("BioandCardStatusTxtXML").value =
      error.toolkit_response;
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
      changeButtonState(false);
    }
    return;
  }
  result = response;
  document.getElementById("verifyBioandCardTxtBx").style.color = "green";
  document.getElementById("verifyBioandCardTxtBx").value = "Successful.";
  document.getElementById("verifyBioandCardTxtBx").type = "text";
  document.getElementById("BioandCardTxtXMlrow").style.display = null;
  document.getElementById("BioandCardStatusTxtXML").value = result.xmlString;
  if (result.xmlString !== null && result.xmlString !== undefined) {
    document.getElementById("vxs").style.display = "block";
    self.verifyxmldata = result.xmlString;
  }
  /* disable all buttons till request is processed */
  changeButtonState(false);
};
function VerifyToolkitResponse() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("VerifyToolkitResponseDiv");
}

function verifyToolkitResponseSubmitBtn() {
  let certDataPath = document.getElementById(
    "verifyResponseCertPathTxtBx"
  ).value;
  let certChainDataPath = document.getElementById(
    "verifyResponseCertChainPathTxtBx"
  ).value;
  let toolkitResponse = document.getElementById("verifyResponseTextarea").value;
  if (toolkitResponse === null && toolkitResponse == undefined) {
    alert("Please provide toolkitResponse");
  } else {
    changeButtonState(true);
    ToolkitOB.getverifyToolkitResponse(
      toolkitResponse,
      certDataPath,
      certChainDataPath,
      verifyToolkitResponseSubmitBtnCB
    );
  }
}
var verifyToolkitResponseSubmitBtnCB = function (response, error) {
  if (null !== error) {
    changeButtonState(false);
    alert(error.message);
    if (
      error.toolkit_response !== null &&
      error.toolkit_response !== undefined
    ) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = error.toolkit_response;
    }
    changeButtonState(false);
    return;
  }
  showDiv("verifyToolkitResponseDiv2");
  if (response.status == "fail" && response.validation_status == 1) {
    alert(response.validation_message);
  }
  if (response.status == "fail" && response.validation_status == -1) {
    alert(response.errormessage);
  }
  if (response.status == "success") {
    document.getElementById("Service_Data").innerHTML = response.service;
    document.getElementById("Action_data").innerHTML = response.action;
    document.getElementById("CSN_data").innerHTML = response.csn;
    document.getElementById("CardNumber_data").innerHTML = response.cardnumber;
    document.getElementById("IdNumber_data").innerHTML = response.idnumber;
    document.getElementById("TimeStamp_data").innerHTML = response.time_stamp;
  }
  changeButtonState(false);
};
function publicDataEfType() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("publicDataEfTypeDiv");
}
function publicDataEfTypeData() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var public_data_ef_type = document.getElementById(
    "PublicDataEfTypeSelect"
  ).value;
  if (
    undefined === public_data_ef_type ||
    "Select One" === public_data_ef_type
  ) {
    alert("Please Select EF Type");
    return;
  }

  changeButtonState(true);
  readerClass.readPublicDataEF(public_data_ef_type, readPublicDataEFCB);
}
var readPublicDataEFCB = function (response, error) {
  if (null !== error) {
    changeButtonState(false);
    alert(error.message);
    changeButtonState(false);
    return;
  }
  result = response;
  alert(result.ef_raw_data);
  parsedEFData(result.ef_raw_data);
  if (self.IsNfc) {
    nfcMenu();
  }
  changeButtonState(false);
};

function parsedEFData(ef_data) {
  parseEFData(ef_data, parsedEFDataCB);
}

var parsedEFDataCB = function (response, error) {
  if (null !== error) {
    changeButtonState(false);
    alert(error.message);
    changeButtonState(false);
    return;
  }
  result = response;
  alert("ParsedData :: " + result.response);
  if (self.IsNfc) {
    nfcMenu();
  }
  changeButtonState(false);
};

function getCSN() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  changeButtonState(true);
  readerClass.getCardSerialNumber(csnCB);
}

var csnCB = function (response, error) {
  hideLoader();
  if (null !== error) {
    changeButtonState(false);
    alert(error.message);
    changeButtonState(false);
    return;
  }
  result = response;
  alert(result.CSN);
  changeButtonState(false);
};

function getLicenseExpiryDate() {
  changeButtonState(true);
  ToolkitOB.getLicenseExpiryDate(getLicenseExpiryDateCB);
}

var getLicenseExpiryDateCB = function (response, error) {
  hideLoader();
  if (null !== error) {
    changeButtonState(false);
    alert(error.message);
    changeButtonState(false);
    return;
  }
  result = response;
  alert(result.expirydate);
  changeButtonState(false);
};
function getReadData() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("ReadDataDiv");
}
function readDataFileTypeData() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  changeButtonState(true);
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Websocket is not initilaized.");
    return;
  }
  var read_data_file_type = document.getElementById(
    "readDataFileTypeSelect"
  ).value;
  var randomStr = generateRandomString(40);
  var requestId = btoa(randomStr);
  changeButtonState(true);
  readerClass.readData(requestId, read_data_file_type, readDataFileTypeDataCB);
}

var readDataFileTypeDataCB = function (response, error) {
  if (null !== error) {
    changeButtonState(false);
    alert(error.message);
    changeButtonState(false);
    return;
  }

  document.getElementById("displayReadData").style.display = null;
  if (null !== error) {
    alert(error.message);
    changeButtonState(false);
    return;
  }
  for (let i = 0; i < response.resource.length; i++) {
    dataBindDom(response.resource[i], "Resources");
  }
  dataBindDom(response.OrganDonor, "OrganDonar");
  changeButtonState(false);
};

function getUpdateData() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("UpdateDataDiv");
}
function updateDataFileTypeData() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  changeButtonState(true);
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Websocket is not initilaized.");
    return;
  }
  var update_data_file_type = document.getElementById(
    "updateDataFileTypeSelect"
  ).value;
  var randomStr = generateRandomString(40);
  var requestId = btoa(randomStr);
  readerClass.updateData(
    requestId,
    update_data_file_type,
    updateDataFileTypeDataCB
  );
}

var updateDataFileTypeDataCB = function (response, error) {
  hideLoader();
  if (error !== null) {
    alert(error.message);
    changeButtonState(false);
    return;
  }
  showDiv("updateDataDiv");
  document.getElementById("updateDataTxtXMlrow").style.display = null;
  document.getElementById("updateDataTxtXML").value = response.xmlString;
  changeButtonState(false);
};

function getConfigFilesExpiryDates() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  changeButtonState(true);
  ToolkitOB.getConfigFilesExpiryDates(getConfigFilesExpiryDatesCB);
}
var getConfigFilesExpiryDatesCB = function (response, error) {
  hideLoader();
  if (null !== error) {
    changeButtonState(false);
    alert(error.message);
    changeButtonState(false);
    return;
  }
  if (
    !(
      null == response.config_lv_cert_expiry &&
      undefined == response.config_lv_cert_expiry
    )
  )
    document.getElementById("configLvCertExpiry_date").innerHTML =
      response.config_lv_cert_expiry;

  if (
    !(
      null == response.config_vg_cert_expiry &&
      undefined == response.config_vg_cert_expiry
    )
  )
    document.getElementById("configVgCertExpiry_date").innerHTML =
      response.config_vg_cert_expiry;

  if (
    !(
      null == response.config_ag_cert_expiry &&
      undefined == response.config_ag_cert_expiry
    )
  )
    document.getElementById("configAgCertExpiry_date").innerHTML =
      response.config_ag_cert_expiry;

  if (
    !(null == response.license_expiry && undefined == response.license_expiry)
  )
    document.getElementById("licenseExpiry_date").innerHTML =
      response.license_expiry;

  if (
    !(
      null == response.server_tls_cert_expiry &&
      undefined == response.server_tls_cert_expiry
    )
  )
    document.getElementById("serverTlsCertExpiry_date").innerHTML =
      response.server_tls_cert_expiry;

  showDiv("configExpireyDatesDiv");
  changeButtonState(false);
};

function nfcMenu() {
  document.getElementById("publicDataBtn").disabled = false;
  document.getElementById("verifyBioBtn").disabled = false;
  document.getElementById("publicDataEfTypeBtn").disabled = false;
  document.getElementById("disconnectBtn").disabled = false;
}

function setSignXaDESDefaultValues() {
  document.getElementById("tsaUrlTxtBx").value = "http://192.168.92.1:90/tsa";
  document.getElementById("ocspUrlTxtBx").value = "http://192.168.92.1:90/ocsp";
  document.getElementById("certPathTxtBx").value = "E:/cert";
  document.getElementById("countryTxtBx").value = "UAE";
  document.getElementById("localityTxtBx").value = "AbuDhabi";
  document.getElementById("postalCodeTxtBx").value = "1234";
  document.getElementById("stateTxtBx").value = "AbuDhabi";
  document.getElementById("streetTxtBx").value = "KhalifaRoad";
}

function resetSignXaDESDefaultValues() {
  document.getElementById("tsaUrlTxtBx").value = "";
  document.getElementById("ocspUrlTxtBx").value = "";
  document.getElementById("certPathTxtBx").value = "";
  document.getElementById("countryTxtBx").value = "";
  document.getElementById("localityTxtBx").value = "";
  document.getElementById("postalCodeTxtBx").value = "";
  document.getElementById("stateTxtBx").value = "";
  document.getElementById("streetTxtBx").value = "";
}

function setSignPaDESDefaultValues() {
  document.getElementById("PtsaUrlTxtBx").value = "http://192.168.92.1:90/tsa";
  document.getElementById("PocspUrlTxtBx").value =
    "http://192.168.92.1:90/ocsp";
  document.getElementById("PcertPathTxtBx").value = "E:/cert";
  document.getElementById("PcountryTxtBx").value = "UAE";
  document.getElementById("PlocalityTxtBx").value = "Abu-Dhabi";
  document.getElementById("PpostalCodeTxtBx").value = "1234";
  document.getElementById("PstateTxtBx").value = "Abu-Dhabi";
  document.getElementById("PstreetTxtBx").value = "KhalifaRoad";
  document.getElementById("reasonSignTxtBx").value = "Testing";
  document.getElementById("signerLocationTxtBx").value = "Abu-Dhabi-WEST";
  document.getElementById("signerContactInfoTxtBx").value = "1234567890";
  document.getElementById("sigXaxisTxtBx").value = "200";
  document.getElementById("sigYaxisTxtBx").value = "10";
  document.getElementById("bgColorTxtBx").value = "#FFFFFF";
  document.getElementById("fontColorTxtBx").value = "#0000EE";
  document.getElementById("fontSizeTxtBx").value = "26";
  document.getElementById("fontNameTxtBx").value = "Comic Sans MS Bold";
  document.getElementById("sigTextTxtBx").value = "Signed for testing";
  document.getElementById("pgNumberTxtBx").value = "1";
}

function resetSignPaDESDefaultValues() {
  document.getElementById("PtsaUrlTxtBx").value = "";
  document.getElementById("PocspUrlTxtBx").value = "";
  document.getElementById("PcertPathTxtBx").value = "";
  document.getElementById("PcountryTxtBx").value = "";
  document.getElementById("PlocalityTxtBx").value = "";
  document.getElementById("PpostalCodeTxtBx").value = "";
  document.getElementById("PstateTxtBx").value = "";
  document.getElementById("PstreetTxtBx").value = "";
  document.getElementById("reasonSignTxtBx").value = "";
  document.getElementById("signerLocationTxtBx").value = "";
  document.getElementById("signerContactInfoTxtBx").value = "";
  document.getElementById("sigXaxisTxtBx").value = "";
  document.getElementById("sigYaxisTxtBx").value = "";
  document.getElementById("bgColorTxtBx").value = "";
  document.getElementById("fontColorTxtBx").value = "";
  document.getElementById("fontSizeTxtBx").value = "";
  document.getElementById("fontNameTxtBx").value = "";
  document.getElementById("sigTextTxtBx").value = "";
  document.getElementById("pgNumberTxtBx").value = "";
}

function setCaDESDefaultValues() {
  document.getElementById("CtsaUrlTxtBx").value = "http://192.168.92.1:90/tsa";
  document.getElementById("CocspUrlTxtBx").value =
    "http://192.168.92.1:90/ocsp";
  document.getElementById("CcertPathTxtBx").value = "E:/cert";
  document.getElementById("CcountryTxtBx").value = "UAE";
  document.getElementById("ClocalityTxtBx").value = "AbuDhabi";
  document.getElementById("CpostalCodeTxtBx").value = "1234";
  document.getElementById("CstateTxtBx").value = "AbuDhabi";
  document.getElementById("CstreetTxtBx").value = "KhalifaRoad";
}

function resetCaDESDefaultValues() {
  document.getElementById("CtsaUrlTxtBx").value = "";
  document.getElementById("CocspUrlTxtBx").value = "";
  document.getElementById("CcertPathTxtBx").value = "";
  document.getElementById("CcountryTxtBx").value = "";
  document.getElementById("ClocalityTxtBx").value = "";
  document.getElementById("CpostalCodeTxtBx").value = "";
  document.getElementById("CstateTxtBx").value = "";
  document.getElementById("CstreetTxtBx").value = "";
}

function setVerifyXaDESDefaultValues() {
  document.getElementById("verifyXADESocspUrlTxtBx").value =
    "http://192.168.92.1:90/ocsp";
  document.getElementById("verifyXADEScertPathTxtBx").value = "E:/cert";
}

function resetVerifyXaDESDefaultValues() {
  document.getElementById("verifyXADESocspUrlTxtBx").value = "";
  document.getElementById("verifyXADEScertPathTxtBx").value = "";
}

function setVerifyPaDESDefaultValues() {
  document.getElementById("verifyPADESocspUrlTxtBx").value =
    "http://192.168.92.1:90/ocsp";
  document.getElementById("verifyPADEScertPathTxtBx").value = "E:/cert";
}

function resetVerifyPaDESDefaultValues() {
  document.getElementById("verifyPADESocspUrlTxtBx").value = "";
  document.getElementById("verifyPADEScertPathTxtBx").value = "";
}
function setVerifyCaDESDefaultValues() {
  document.getElementById("verifyCADESocspUrlTxtBx").value =
    "http://192.168.92.1:90/ocsp";
  document.getElementById("verifyCADEScertPathTxtBx").value = "E:/cert";
}

function resetVerifyCaDESDefaultValues() {
  document.getElementById("verifyCADESocspUrlTxtBx").value = "";
  document.getElementById("verifyCADEScertPathTxtBx").value = "";
}

function ResetPINWithoutAuthenticateBiometric() {
  document.getElementById("vxs").style.display = "none";
  document.getElementById("res").style.display = "none";
  showDiv("ResetPINWithoutAuthenticateBiometricDiv");
}

function ResetPINWithoutAuthenticateBiometricsubmit() {
  var pin = document.getElementById(
    "ResetPINWithoutAuthenticateBiometrictxt"
  ).value;
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  if (undefined === pin || "" === pin || pin.length < 4) {
    alert("Please provide valid pin .");
    return;
  }
  changeButtonState(true);
  showLoader();
  PrepareRequest(function (requestHandle) {
    if (requestHandle === undefined || requestHandle === null) {
      var encodedPin = pin;
      readerClass.resetPINWithoutAuthenticateBiometric(
        encodedPin,
        ResetPINWithoutAuthenticateBiometricCB
      );
    } else {
      ToolkitOB.getDataProtectionKey(function (response, error) {
        var encodedPin = encodePinOnServer(
          pin,
          requestHandle,
          response.publicKey
        );
        if (encodedPin == -1) {
          hideLoader();
          changeButtonState(false);
          alert("Failed to Encrypt data");
          return;
        }
        readerClass.resetPINWithoutAuthenticateBiometric(
          encodedPin,
          ResetPINWithoutAuthenticateBiometricCB
        );
      });
    }
  });
}

function ResetPINWithoutAuthenticateBiometricCB(response, error) {
  changeButtonState(false);
  hideLoader();
  if (error === null) {
    document.getElementById("ResetPINWithoutAuthenticateBiometricresult").type =
      "text";
    document.getElementById(
      "ResetPINWithoutAuthenticateBiometricresult"
    ).style.color = "green";
    document.getElementById(
      "ResetPINWithoutAuthenticateBiometricresult"
    ).value = response.status;
    if (response.xmlString !== null && response.xmlString !== undefined) {
      document.getElementById("vxs").style.display = "block";
      self.verifyxmldata = response.xmlString;
    }
  } else {
    alert(error.errormessage);
  }
}

function GetReaderNameAndSerialNumber() {
  if (null === readerClass || undefined === readerClass) {
    alert("ERROR : Reader is not initiaized.");
    return;
  }
  var ReaderName = readerClass.getReaderName();
  var ReaderSerialNumber = readerClass.getReaderSerialNumber();
  document.getElementById("readerNameId").value = ReaderName;
  document.getElementById("readerSerialNumberId").value = ReaderSerialNumber;
  showDiv("ReaderNameAndSerialNumberDiv");
}
